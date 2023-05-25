
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus } from '@fortawesome/free-regular-svg-icons';

import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/Base.css';
import './css/FianzasRequisitos.css';
import curvedImageBk from '../../assets/general/curved-background.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const FianzasRequisitos = () => {

    const [showItemOne, setShowItemOne] = useState<boolean>(true);
    const [showItemTwo, setShowItemTwo] = useState<boolean>(false);
    const [showEmailInput1, setShowEmailInput1] = useState<boolean>(false);
    const [showEmailInput2, setShowEmailInput2] = useState<boolean>(false);

    function onShowHideItemOne() {
        setShowItemOne(!showItemOne);
    }
    function onShowHideItemTwo() {
        setShowItemTwo(!showItemTwo);
    }
    function onShowEmailInput () {

    }


    return (
        <>
        <Header />
        <Submenu />
        <section className="fianzas-requisitos">

            <div className="curved-titled">
                    <div className="h-container">   
                        <h1 className="title-text">Requisitos</h1>
                        <div className="image-content">
                            <img src={curvedImageBk} className="image-background"></img>
                        </div>
                    </div>
            </div>

            <div className="fianzas-requisitos-content">
                <hr className="hr-orange"></hr>

                <div className="requisitos-row">

                    <div className="requisitos-col left vertical-centered">
                        <div className='title' onClick={onShowHideItemOne}>
                            <h2>
                                { showItemOne ? <FontAwesomeIcon icon={faSquareMinus}/> :<FontAwesomeIcon icon={faSquarePlus}/> }&nbsp;
                                Persona Moral
                            </h2>                        
                        </div>

                    </div>
                    
                    
                    { showItemOne ?
                    <div className="requisitos-col mid">
                        
                        <ol>
                            <li>Copia de Acta Constitutiva y Protocolizaciones.</li>
                            <li>Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia).</li>
                            <li>Curriculum de Obras/Servicios de la Empresa.</li>
                            <li>bante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses).</li>
                            <li>RFC y/o Constancia de Situación Fiscal.</li>
                            <li>Declaración ISR con Acuse 2022.</li>
                            <li>Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022.</li>
                            <li>Balance General y Estado de Resultados Parciales Internos 2023 (No Mayor a 6 Meses). Con Leyenda de validacion (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cedula Profesional.</li>
                        </ol>
                        <h3>Sus obligados</h3>
                        <ol>
                            <li>Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen.</li>
                            <li>Identificación Vigente con Foto (IFE o Pasaporte).</li>
                            <li>Comprobante de Domicilio del Obligado Solidario (No Mayor a 3 Meses).</li>
                            <li>Boleta Predial del Año 2023.</li>
                            <li>Certificado de Libertad o Gravamen del Año 2023.</li>
                            <li>Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge.</li>
                        </ol>
                        <div className="actions">
                            <a className="btn-fianzas" href="/clientes-nuevo-ingreso-2023-pmoral.pdf" target="_blank">Imprimir</a>
                            <button className="btn-fianzas" onClick={onShowEmailInput}>Enviar por correo</button>
                        </div>
                    </div>
                    :   <div className="requisitos-col mid">

                        </div>
                    }

                </div>
                <hr className="hr-orange"></hr>
                <div className="requisitos-row">

                    <div className="requisitos-col left vertical-centered">
                        <div className='title' onClick={onShowHideItemTwo}>
                            <h2>
                                { showItemTwo ? <FontAwesomeIcon icon={faSquareMinus}/> :<FontAwesomeIcon icon={faSquarePlus}/> }&nbsp;
                                Persona Física
                            </h2>                        
                        </div>

                    </div>
                

                    {  showItemTwo ?
                    <div className="requisitos-col mid">
                        <ol>
                            <li>Identificación Vigente con Foto del Representante Legal (INE, Pasaporte o Licencia)</li>
                            <li>Curriculum de Obras/Servicios de la Empresa</li>
                            <li>Comprobante de Domicilio Fiscal de la Empresa (No mayor a 3 Meses).</li>
                            <li>CURP.</li>
                            <li>RFC y/o Constancia de Situación Fiscal.</li>                         <li>Declaración ISR y Acuse 2022.</li>
                            <li>Balance General y Estado de Resultados Internos al 31 de Diciembre del 2022.</li>
                            <li>Balance General y Estado de Resultados Parciales Internos 2023 (No mayores a 6 meses). Con Leyenda de validación (*Abajo citada). Deberán Estar en Papel Membretado y Firmados Por el Representante Legal y Contador Público, anexando copia de su Cédula Profesional.</li>

                        </ol>
                        <h3>Sus obligados</h3>
                        <ol>
                            <li>Copia de Escrituras de Bienes Inmuebles Urbanos. Libres de Gravamen.</li>
                            <li>Identificación Vigente con Foto (INE o Pasaporte).</li>
                            <li>Comprobante de Domicilio del Obligado Solidario (No mayor a 3 meses).</li>
                            <li>Boleta Predial del Año 2023.</li>
                            <li>Certificado de Libertad o Gravamen del Año 2023.</li>
                            <li>Acta de Matrimonio (En caso de ser Casado), Identificación con Fotografía (INE) del Cónyuge</li>
                        </ol>

                    <div className="actions">
                        <a href='/clientes-nuevo-ingreso-2023-pfisica.pdf' target="_blank" className="btn-fianzas">Imprimir</a>
                        <button className="btn-fianzas">Enviar por correo</button>
                    </div>
                    </div>
                    :                    
                    <div className="requisitos-col mid">
                    </div>
                    
                    }


                </div>
                <hr className="hr-orange"></hr>
            </div>
            
        </section>
        <Footer />

        </>
    );
}

async function onSendEmail() {

}

function EmailInputForm () {
    <div className='email-input-form'>
        
        <input type='text' placeholder='...ingresa una direccion de correo'></input>
        <button onClick={onSendEmail}>Enviar</button>
    </div>
}