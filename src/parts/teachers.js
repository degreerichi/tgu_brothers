import React from "react";
import ReactHtmlParser from 'react-html-parser';
import imgMauro from "../img/profes/mauro.jpg";
import imgJuan from "../img/profes/juan.jpg";
import imgRodrigo from "../img/profes/rodrigo.jpg";
import imgFede from "../img/profes/fede.jpg";
import imgOliver from "../img/profes/oliver.jpg";
import imgJj from "../img/profes/jj.jpg";
import imgAndres from "../img/profes/andres.jpg";
import imgAura from "../img/profes/aura.jpg";
import imgOswaldo from "../img/profes/oswaldo.jpg";

const Teacher = ({image, name, description, content, right = false})=>{

    return(
        <div className={`teacher ${right && 'right'}`}>
            {!right && <img className="teacher-image" src={image} alt=""/>}
            <div className="teacher-info">
                <span className="teacher-title">{name}</span>
                <span className="teacher-description">{description}</span>
                <p className="teacher-content">{ReactHtmlParser(content)}</p>
            </div>
            {right && <img className="teacher-image" src={image} alt=""/>}
        </div>
    );
}

const Teachers = ()=>{
    return(
        <div className="teachers" id="equipo">
            <div className="container">
                <h1>PROFES</h1>
                <Teacher
                    image={imgMauro}
                    name="Mauro Suárez"
                    description="Director General"
                    content="Mauro dirige globalmente el destino de Brother. 
                    Él ha sido, junto a un gran equipo, quien ha llevado a la 
                    red de Escuelas de Creativos a ser uno de los centros de 
                    formación creativa más vanguardista del momento y a 
                    convertirse en uno de los semilleros de nuevos talentos 
                    más influyentes y frescos del mundo. Actualmente Mauro 
                    está desarrollando la expansión de Brother en Europa, 
                    mientras produce su primer disco como Dj Fuego: “GATO”."/>
                <Teacher
                    image={imgJuan}
                    name="Juan Rezzónico"
                    description="Director Académico Global Brother"
                    content="Juan con 36 años cuenta con más de 10 años de 
                    experiencia trabajando en agencias de publicidad como DDB, 
                    BBDO y la multipremiada Del Campo Saatchi and Saatchi. 
                    Hoy con su propia agencia “MURRA”, trabaja para clientes 
                    como Nike, Jugos Fit 0, Club San Lorenzo de Almagro e ISAT. 
                    Anteriormente se desempeñó como Director Creativo de la 
                    Agencia Don, nombrada durante su gestión como la mejor 
                    agencia independiente de Argentina. <br/><br/>
                    En su recorrido, ganó numerosos premios tanto en el plano 
                    local como internacional, entre los que se destacan 7 leones 
                    de Cannes, 3 Clio, El Sol, Diente, FIAP, Ojo de Iberoamérica, 
                    Lápiz y Wave. Fue jurado en reiteradas oportunidades en los 
                    festivales del Circulo  de Creativos Argentinos. Realizó 
                    estudios y cursos sobre Marketing Deportivo lo que lo llevó 
                    a trabajar con clubes de fútbol como San Lorenzo de Almagro 
                    de Argentina y Saint Andreu de España.  Juan es un gran 
                    evangelizador de la cultura del hacer, ha viajado con la 
                    escuela por Latinoamérica y España, brindando talleres y 
                    charlas de creatividad en congresos, festivales y universidades."
                    right={true}/>
                <Teacher
                    image={imgRodrigo}
                    name="Rodrigo Gallagher"
                    description="Chief Digital Officer (CDO) / Intelligence"
                    content="Creo que me quede en los 80´s por la música y 
                    la cultura, mi amor por la publicidad nace desde el primer 
                    día que puse un pie en Y&R y desde ese momento nunca salí 
                    de una agencia, ya hace de eso unos 15 años. Pase por 
                    agencias como Y&R, DDB, Tribal y Ogilvy que ha sido como 
                    mi segunda casa. He trabajando en diferentes mercados 
                    como EEUU, Guatemala, Honduras y Mexico creando ideas 
                    para más de 30 grandes marcas.<br/><br/>
                    En los últimos años he incursionado más para el lado de 
                    la innovación e investigación para las marcas (digital), 
                    hoy en día el mundo ya cambio y va ser digital.<br/><br/>
                    He ganado en múltiples festivales, como Cannes Festival, 
                    Ojo de Iberoamérica, Festival de Antigua, Effies y Effies Latam.<br/><br/>
                    Y siempre he creído que soy un forastero que esta determinado a ganar."/>
                <Teacher
                    image={imgFede}
                    name="Fede Ahunchain"
                    description="Director Académico Brother Centro América"
                    content="Es socio fundador y director general creativo de Dont stop me now, 
                    agencia referente del mercado, responsable de la comunicación y las ideas 
                    detrás de Banco G&T Continental, Pollo Campero, Café Barista, Adrenaline 
                    Rush, Mountain Dew, Únete a AYUVI, entre otras, y además representante en 
                    el país de J. Walter Thompson. Es uruguayo y fue alumno fundador de Brother. 
                    Trabajó para redes como Euro RSCG, LOWE, DDB y BBDO en Uruguay, Argentina 
                    y Centroamérica. Ganador de 3 grandes effies y más de dos decenas de effies 
                    oro, plata y bronce logrando ubicar a su agencia independiente en el número 
                    83 del mundo en el Effie Index."
                    right={true}/>
                <Teacher
                    image={imgOliver}
                    name="Oliver"
                    description="Director Académico Brother Honduras"
                    content="Oliver Steve Rodriguez, actualmente es el CEO y Director 
                    General Creativo en BBDO Honduras, con mas de 20 años de experiencia 
                    trabajando con agencias de publicidad como, Ogilvy, Grey, Mullen 
                    Lowe, Avance Carat y BBDO Guatemala en su carrera ha liderado la 
                    creatividad para grandes marcas del mercado local y regional; 
                    Walmart , Huggies, Honda, Mitsubishi, Pepsi, Claro, Gatorade, 
                    Loto, Corona, Stella Artois y Michelob Ultra, entre otras. <br/><br/>
                    En su carrera ha ganado varios premios a nivel internacional como ser 
                    EFFIE Guatemala, Festival Caribe Panamá, Fepi Argentina y Festival de 
                    Antigua Guatemala, además a participado como jurado en el ojo de 
                    Iberoamérica. <br/><br/>
                    Oliver estará a cargo de la dirección Académica de Brother TGU, con 
                    una visión de crear un semillero de grandes talentos para la industria 
                    publicitaria y marketing de Honduras, acompañado por grandes 
                    profesionales que impartirán las clases de redacción, direacción de 
                    arte, creatividad digital y estratégia digital bajo el enfoque de 
                    Brother #SosLoQueHaces."/>
                <Teacher
                    image={imgJj}
                    name="JJ Martínez Bernáldez"
                    content="JJ Martinez Bernáldez <br/>
                    Mexicano, de Ensenada <br/>
                    (de ahí el gusto por los tacos de pescado y las 
                    tortillas de harina). <br/>
                    Americanista y Guadalupano <br/><br/>
                    Creative Chief Officer Mullen Lowe Honduras <br/>
                    Contador de cuentos chinos <br/>
                    Jurado en Cannes y el Ojo de Iberoamérica. <br/><br/>
                    Trabajos para Colombia, El Salvador, República Dominicana, 
                    Guatemala, Brasil, USA, México, India y Honduras"
                    right={true}/>
                <Teacher
                    image={imgAndres}
                    name="Andres Villalobos"
                    description="Director General Creativo Ogilvy Honduras"
                    content="Si no te apasiona esto, mejor no lo hagas. <br/>
                    Si no te vas a meter todo, mejor no lo hagas. <br/>
                    Si no vas a sacrificar tiempo, mejor no lo hagas. <br/>
                    Si no vas a soñar con esto, ya sabes la respuesta. <br/><br/>
                    Peruano, 10 años de experiencia, premiado en diferentes 
                    festivales como: Cannes Lions, Effie Latam y el Ojo de 
                    Iberoamérica."/>
                <Teacher
                    image={imgAura}
                    name="Aura Sasso"
                    description="Director General Creativo Ogilvy Honduras"
                    content="Aura Sasso, publicista, mamá y Rockstar en construcción. 
                    Aquí donde me ven, fui presentadora de televisión y es ahí donde 
                    inicia mi recorrido en la generación de contenido que mantenga 
                    enganchadas a las personas. <br/><br/>
                    Los caminos de la vida me llevaron a ser CEO del trabajo más 
                    difícil y creativo del mundo: Ser mamá. Después de eso, aparecieron 
                    las oportunidades de llevar mi ingenio en medios tradicionales al 
                    fabuloso mundo digital. <br/><br/>
                    Actualmente de día soy Digital Lead Creative para Ariadna Communication 
                    Group en Honduras y de noche soy cantante en un proyecto musical 
                    llamado Vinyl, con el cual tuve la dicha de abrirle concierto a 
                    Vilma Palma e Vampiros y Miguel Mateos."
                    right={true}/>
                <Teacher
                    image={imgOswaldo}
                    name="Oswaldo"
                    content="Oswaldo díaz, para los amigos Ozzy, pero no Osbourne. 
                    Quería ser bajista y nunca se dio por mis dedos lentos para las 
                    cuerdas pero suficientemente aptos para el detalle, el diseño y 
                    la dirección de arte. Vengo diseñando cosas desde los 15 años y 
                    soy de 1987, Saquen calculos. Aficionado al futbol, a instagram 
                    y al algoritmo intuitivo de sopotify y a decir lo que quiero en 
                    Twitter. Y hablando de amor y de odio, tengo 10 años de experiencia 
                    en el mundo de agencia. Actualmente soy director Creativo en BBDO 
                    Honduras, y años atrás como Director de Arte y Head of Art."/>
            </div>
        </div>
    );
}

export default Teachers;