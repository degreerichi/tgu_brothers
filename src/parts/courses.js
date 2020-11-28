import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GetCursos } from "../api/api";
import { Paginator } from "../plugins/Paginator";
import { 
    addScene, 
    tm
} from "../helpers/anim";

const Course = ({title, date, state = " ", image, content})=>{

    let [modalVisible, setModalVisible] = useState(false);

    let toggleModal = ()=>{
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <div className="course" onClick={toggleModal}>
                <img className="course-image img-fluid" src={image} alt=""/>
                <span className="course-date">{date} <span className="course-state">{state}</span></span>
                <p className="course-info">
                    {content}
                </p>
            </div>
            <Modal isOpen={modalVisible} toggle={toggleModal} centered={true}>
                <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
                <ModalBody>
                    <img className="img-fluid" src={image} alt=""/>
                    <p className="mb-0"><span className="modal-course-date">{date} <span className="modal-course-state">{state}</span></span></p>
                    <p className="text-center">{content}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const Courses = ()=>{

    let coursesWrapper = useRef();
    let coursesList = useRef();
    let duration = 0.8;

    let [courses, setCourses] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(0);

    let animateIn = ()=>{
        tm.to(coursesList.current, {
            css: {
                transform: "translateX(0%)",
                opacity: 1
            }, duration: duration
        });
    }

    let animateOut = ()=>{
        // fadeOutDown(coursesList.current, duration);
    }
    
    let getCoursesByPage = (page) => {
        setCourses([]);
        setCurrentPage(page);
        GetCursos(page).then((res)=>{
            setCourses(res.data.data);
            setTotalPages(res.data.last_page);
        });
    }

    useEffect(()=>{
        tm.set(coursesList.current, {
            css: {
                transform: "translateY(20%)",
                opacity: 0
            }
        });

        getCoursesByPage(1);
        addScene(
            animateIn, 
            animateOut, 
            coursesWrapper.current
        );
        // eslint-disable-next-line
    }, []);

    return(
        <div className="courses" id="cursos" ref={coursesWrapper}>
            <div className="container" ref={coursesList}>
                <h1 className="text-center text-white mb-5">Cursos</h1>
                <div className="row">
                    {courses.map((c, i)=>{
                        return (
                            <div className="col-12 col-md-4" key={`course${i}`}>
                                <Course
                                    title={c.nombre}
                                    date={c.fecha}
                                    state={c.estado}
                                    image={c.imagen}
                                    content={c.contenido}/>
                            </div>
                        )
                    })}
                </div>
                <div className="mt-5 d-flex flex-row justify-content-center align-items-center">
                    <Paginator 
                        pagesCount={totalPages}
                        pageActive={currentPage}
                        leftArrowAction={()=>{getCoursesByPage(currentPage - 1)}}
                        rightArrowAction={()=>{getCoursesByPage(currentPage + 1)}}
                        numbersAction={(number)=>{getCoursesByPage(number)}}/>    
                </div>
            </div>
        </div>
    );
}

export default Courses;