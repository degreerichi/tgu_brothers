import React, { useState, useEffect } from "react";
import imgSosloquehaces from "../img/sosloquehaces.png";
import { LaravelForm } from "../plugins/laravelform";
import { GetCursosResume } from "../api/api";
import { SAVE_REGISTRO } from "../api/routes";

export const Contact = ()=>{

    let [successMessage, setSuccessMessage] = useState("");
    let [nombre, setNombre] = useState();
    let [correo, setCorreo] = useState();
    let [telefono, setTelefono] = useState();
    let [cursoInteres, setCursoInteres] = useState();
    let [mensaje, setMensaje] = useState();
    let [cursos, setCursos] = useState([]);

    let onFormSuccess = ()=>{
        resetVars();
        setSuccessMessage("El registro se guardó con éxito.");
        setTimeout(()=>{
            setSuccessMessage("");
        }, 3000)
    }

    let resetVars = ()=>{
        setNombre("");
        setCorreo("");
        setTelefono("");
        setCursoInteres("");
        setMensaje("");
    }

    let updateState = (state)=>{
        setNombre(state.nombre);
        setCorreo(state.correo);
        setTelefono(state.telefono);
        setCursoInteres(state.cursoInteres);
        setMensaje(state.mensaje);
    }

    useEffect(()=>{
        GetCursosResume().then(res => {
            setCursos(res.data.cursos);
        });
    }, []);
    
    // let onFormError = ()=>{
    //     setSuccessMessage("No se pudo guardar tu registro, por favor inténtalo más tarde.");
    // }

    return(
        <div className="contact" id="contacto">
            <div className="container">
                <h2 className="mb-5 text-white">Se parte de la siguiente generación</h2>
                <div className="row mx-0">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="img-fluid" src={imgSosloquehaces} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <LaravelForm 
                            url={SAVE_REGISTRO}
                            method="post"
                            success={onFormSuccess}
                            onChange={updateState}>
                            <div className="row form">
                                <div className="col-12">
                                    <div className="input-wrapper">
                                        {/* <label htmlFor="nombre">Nombre</label> */}
                                        <input value={nombre} type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-wrapper">
                                        {/* <label htmlFor="correo">Correo</label> */}
                                        <input value={correo} type="text" name="correo" id="correo" placeholder="Correo"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-wrapper">
                                        {/* <label htmlFor="telefono">Teléfono</label> */}
                                        <input value={telefono} type="text" name="telefono" id="telefono" placeholder="Teléfono"/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-wrapper">
                                        <label htmlFor="curso_interes">Me interesa</label>
                                        <select value={cursoInteres} name="curso_interes" id="curso_interes" defaultValue="">
                                            <option value="" disabled>Seleccione un curso</option>
                                            {cursos.map((c, i)=>{
                                                return <option key={i} value={c.id}>{c.nombre}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-wrapper">
                                        {/* <label htmlFor="mensaje">Mensaje</label> */}
                                        <input value={mensaje} type="text" name="mensaje" id="mensaje" placeholder="Mensaje"/>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                    <button type="submit">Enviar</button>
                                </div>
                                <div className="col-12">
                                    {successMessage !== "" ? (
                                        <span className="success-message">{successMessage}</span>
                                    ) : ""}
                                </div>
                            </div>
                            {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                        </LaravelForm>
                    </div>
                </div>
            </div>
        </div>
    );
}