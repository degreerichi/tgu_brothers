import { 
    GET_CURSOS_PAGINATE, 
    GET_CURSOS_RESUME 
} from "./routes";
import Axios from "axios";

const maxAttempts = 3;
const getHeaders = ()=>{
    return {
        "Accept": "application/json"
    }
}

// Obtiene solicitudes desde el API, con la url dada, metodo y datos
const GetResponseFromApi = (url, method = "post", data = {}, attempt = 0)=>{

    return new Promise((resolve, reject)=>{
        Axios({
            url: url,
            method: method,
            headers: getHeaders(),
            data: data
        }).then((res)=>{
            resolve(res);
        }).catch((err)=>{
            if(attempt >= maxAttempts){
                reject(err);
            }else{
                attempt++;
                // console.log(url, ` request failed, retrying... failed attempt number: ${attempt}`);
                GetResponseFromApi(url, method, data, attempt);
            }
        });
    });
}

export const GetCursos = (pagina)=>{
    return GetResponseFromApi(GET_CURSOS_PAGINATE(pagina), "get");
}

export const GetCursosResume = ()=>{
    return GetResponseFromApi(GET_CURSOS_RESUME, "get");
}