// const APP_URL = "http://tgu.brothers.com";
const APP_URL = "https://blooming-brushlands-91833.herokuapp.com";

export const SAVE_REGISTRO = `${APP_URL}/api/registrar`;
export const GET_CURSOS_RESUME = `${APP_URL}/api/cursos_resume`;
export const GET_CURSOS_PAGINATE = (pagina)=>{
    return `${APP_URL}/api/cursos?page=${pagina}`;
}