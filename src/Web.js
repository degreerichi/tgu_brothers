import React, { useEffect, Suspense, lazy } from 'react';
import "./scss/index.scss";
import 'animate.css/animate.css';
import SmoothScroll from "smooth-scroll";

const Webnav = lazy(() => import("./parts/webnav"));
const Splash = lazy(() => import("./parts/splash"));
const About = lazy(() => import("./parts/about"));
const Courses = lazy(() => import("./parts/courses"));
const Teachers = lazy(() => import("./parts/teachers"));
const Media = lazy(() => import("./parts/media"));
const Contact = lazy(() => import("./parts/contact"));
const Footer = lazy(() => import("./parts/footer"));

// import { Preloader } from "./parts/preloader";
// import { Webnav } from "./parts/webnav";
// import { Splash } from "./parts/splash";
// import { About } from "./parts/about";
// import { Courses } from "./parts/courses";
// import { Teachers } from "./parts/teachers";
// import { Media } from "./parts/media";
// import { Contact } from "./parts/contact";
// import { Footer } from "./parts/footer";

function Web() {

	useEffect(()=>{
		const options = {
			speed: 500,
			speedAsDuration: true,
			offset: window.innerWidth < 768 ? 400 : 90
		}
		new SmoothScroll('a[href*="#"]', options);
	}, []);

	return (
		<>
			<Suspense fallback={<div>Cargando...</div>}>
				<Webnav/>
				<Splash/>
				<About/>
				<Courses/>
				<Teachers/>
				<Media/>
				<Contact/>
				<Footer/>
			</Suspense>
		</>
	);
}

export default Web;
