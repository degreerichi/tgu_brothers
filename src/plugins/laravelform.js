/**
 * LaravelForm v0.2
 */

import React from "react";
import Axios from "axios";

export const LaravelSelect = (props, ref) => {

    let errors = [];

    if(typeof props.errors == "object"){
        errors = props.errors.map((e, i)=>{
            return <label key={i} htmlFor="" className="error">{e}</label>
        });
    }

    return(
        <>
            <select {...props}>
                {props.children}
            </select>
            {errors}
        </>
    );
}

export const LaravelInput = (props, ref) => {

    let errors = [];

    if(typeof props.errors == "object"){
        errors = props.errors.map((e, i)=>{
            return <label key={i} htmlFor="" className="error">{e}</label>
        });
    }

    return(
        <>
            <input {...props}/>
            {errors}
        </>
    );
};

/**
 * @param string {url} Enlace hacia donde se planea enviar el request
 * @param string {method}[get, post...] Método utilizado para enviar el request
 * @param any {inputComponent} Si se utiliza un componente input personalizado, se comparte el tipo nada mas.
 * @param function {success([])} Callback que se va a ejecutar si el formulario se envió y todas las validaciones
 * @param function {onChange(state)} Callback que se va a ejecutar cada vez que alguno de los items del formulario hace onchange
 * fueron correctas.
 * @param function {error([error])} Callback adicional para ejecutar código en caso que se de un error de validación.
 * @param boolean {submitDisabled} Variable to handle externally if the button submit is disabled
 */
export class LaravelForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            formProps: {},
            convertedChilds: null,
            errors: {},
            submiting: false
        }
        this.tempFormProps = {};
        this.submitButton = React.createRef();
    }

    
    componentDidMount = ()=>{
        this.setState({
            convertedChilds: this.convertChilds(this.props.children),
            formProps: this.tempFormProps
        });
    }

    convertChilds = (c)=>{
        return React.Children.map(c, (child)=> {

            if(child == null) return;

            
            // La excepción para devolver el objeto idéntico son los selects configurados
            // Buscamos objetos select 
            if(child.type === 'select'){

                this.tempFormProps[child.props.name] = child.props.defaultValue !== undefined ? child.props.defaultValue : (child.props.value !== undefined ? child.props.value : "");
                return <LaravelSelect {...child.props} onChange={this.changeHandler} 
                    errors={this.state.errors[child.props.name]}>
                        {child.props.children}
                    </LaravelSelect>;

            }

            // Le damos una oportunidad al usuario para que pueda escoger su componente
            // select personalizado con la propiedad selectComponent
            if(this.props.selectComponent != null && child.type === this.props.selectComponent){

                // Se encuentra, se clona el componente y solo se le asigna
                // en onChange listener y se le asigna un arreglo de errores
                // a los que deberá estar pendiente de cambios
                this.tempFormProps[child.props.name] = child.props.defaultValue !== undefined ? child.props.defaultValue : "";
                return React.cloneElement(child, {
                    ...child.props,
                    onChange: this.changeHandler,
                    errors: this.state.errors[child.props.name]
                });

            }

            // Validamos si es un objeto válido y si tiene hijos
            // Para ese caso tenemos que devolver el objeto idéntico
            if(React.isValidElement(child) && child.props.children !== undefined){
                // Buscamos el boton submit que se asignó al formulario
                if(child.props.type !== "undefined" && child.props.type === 'submit'){
                    // Cuando lo encontremos, lo devolvemos igual pero con la 
                    // ref insertada en el botón
                    return React.cloneElement(child, {
                        ...child.props,
                        disabled: this.props.submitDisabled || this.state.submiting || Object.keys(this.state.errors).length > 0,
                        ref: (ref)=>{this.submitButton = ref}
                    });
    
                }

                // Devolvemos el objeto idéntico en caso que tenga hijos
                return React.createElement(
                    child.type,
                    {...child.props},
                    this.convertChilds(child.props.children)
                );
            }

            // Buscamos objetos input que se hayan configurado
            if(child.type === 'input'){
                
                // Al encontrarlo, le asignamos una variable al state y lo devolvemos
                // transformado en un objeto React de tipo LaravelInput
                this.tempFormProps[child.props.name] = child.props.value;
                return <LaravelInput {...child.props} onChange={this.changeHandler} 
                    errors={this.state.errors[child.props.name]}/>;

            
            }else

            // Verificamos si el objeto input es del tipo que se compartió como
            // propiedad a través del LaravelForm
            if(this.props.inputComponent != null && child.type === this.props.inputComponent){

                // Se encuentra, se clona el componente y solo se le asigna
                // en onChange listener y se le asigna un arreglo de errores
                // a los que deberá estar pendiente de cambios
                // console.log(child);
                this.tempFormProps[child.props.name] = child.props.defaultValue !== undefined ? child.props.defaultValue : "";
                return React.cloneElement(child, {
                    ...child.props,
                    onChange: this.changeHandler,
                    errors: this.state.errors[child.props.name]
                });

            }else

            return child;
        });
    }

    changeHandler = (e)=>{

        let prop = {...this.state.formProps};
        let errors = this.state.errors;
        let targetName = e.target.getAttribute("name");

        prop[e.target.getAttribute("name")] = e.target.value;
        delete errors[e.target.getAttribute("name")];

        this.setState({formProps: prop, errors: errors}, ()=>{
            if(typeof this.props.onChangeEvent === "function") 
                this.props.onChangeEvent(targetName, this.state.formProps);
        });

    }

    submit = (e) =>{
        e.preventDefault();
        this.setState({submiting: true}, ()=>{
            this.sendRequest();
        });
    }

    sendRequest = ()=>{
        if(typeof this.props.onFormSend === "function") this.props.onFormSend();
        Axios({
            method: this.props.method,
            url: this.props.url,
            params: this.state.formProps,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...this.props.headers
            }
        }).then((res)=>{
            if(typeof this.props.success === "function") this.props.success(res, this.state.formProps);

            // Agregado, se reinician las variables del estado
            let newFormProps = {}

            for (const [key, value] of Object.entries(this.state.formProps)) {
                newFormProps[key] = "";
            }

            this.setState({
                formProps: newFormProps
            });
              
        }).catch((error)=>{
            if(typeof this.props.error === "function") this.props.error(error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if(error.response.status === 422){
                    this.setState({
                        errors: error.response.data.errors
                    });
                    // console.log(error.response.data);
                }
                if(error.response.status === 404){
                    console.warn("[LaravelForm] No se pudo encontrar la ruta.");
                }
                console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.warn("[LaravelForm] No se pudo obtener ninguna respuesta del servidor (url).");
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }).finally(()=>{
            this.setState({submiting: false});
        });
    }

    render(){
        return (
            <>
                <form action="" onSubmit={this.submit} className={this.props.className}>
                    {this.convertChilds(this.props.children)}
                </form>
            </>
        );
    }
}

// Example:
// <LaravelForm url="http://127.0.0.1:8000/api/register" method="get">
//     <div>
//         <div>
//             <label htmlFor="">Username</label>
//             <input type="text" name="usuario" className="laclase"/>
//         </div>
//         <div>
//             <label htmlFor="">Correo</label>
//             <input type="text" name="correo_usuario" className="laclase"/>
//         </div>
//         <div>
//             <label htmlFor="">Contraseña</label>
//             <input type="password" name="pass" className="laclase"/>
//         </div>
//         <input type="submit" value="Enviar"/>
//     </div>
// </LaravelForm> 