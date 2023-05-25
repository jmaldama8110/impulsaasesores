import { faFacebook, faInstagram,faTwitter, faGoogle, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import fiLogo from '../../../assets/fianzas/fianzas-logo.png';
import appStore from '../../../assets/general/appstore.png';
import playStore from  '../../../assets/general/playstore.png';
import { Link } from 'react-router-dom';
import { getCurrentYear, getYearsFromYear } from '../../../utils/CurrencyFormatter';

export const Footer = ()=>{
    function onShowContactForm () {
        const modal = document.getElementById('contact-component');
        const disp = modal?.style.display;
        modal!.style.display = disp === 'block' ? "none" : "block";
    }

    return (
        <footer>
            <div className='services-content'>
                <div className='service-title'>
                    <h2>Servicio Eficiente</h2>
                    <p>En 24 horas ofrecemos la solución que la inmediatez de tu caso requiere.</p>
                </div>
                <div className='service-action'>
                    <Link className='btn-fianzas' to="" onClick={onShowContactForm}>Contáctanos</Link>
                </div>
            </div>


            <div className='footer-upper-content'>
                <div className='footer-upper-content-container'>
                    <div>
                        <img src={fiLogo} className='logo'></img>
                        <p>Más de {getYearsFromYear(1981)} años de experiencia en el ramo afianzador.</p>
                    </div>
                    <div>
                        <h4>Productos</h4>
                        <ul>
                            <li><Link to='/fianzas/arrendamiento'>Arrendamiento</Link></li>
                            <li><Link to='/fianzas/fidelidad'>Fidelidad</Link></li>
                            <li><Link to='/fianzas/fiscal'>Fiscales</Link></li>
                            <li><Link to='/fianzas/judicial'>Judiciales</Link></li>
                            <li><Link to='/fianzas/notario'>Notario</Link></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/">Aviso de privacidad</Link></li>
                            <li><Link to="/">Términos</Link></li>
                            <li><Link to="/">Condiciones</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contacto</h4>
                        <ul>
                            <li><Link to="/"><p><FontAwesomeIcon icon={faPhone} size='1x'  className='fa-iconx'/> 800 902 3456</p></Link></li>
                            <li><Link to="/fianzas/oficinas"><p><FontAwesomeIcon icon={faLocationDot} size='1x' className='fa-iconx'/> 9 oficinas en todo el país</p></Link></li>
                            <li><Link to="mailto:atencion@impulsaasesores.mx"><p><FontAwesomeIcon icon={faEnvelope} size='1x' className='fa-iconx'/><span> atencion@impulsaasesores.mx</span></p></Link></li>
                        </ul>
                    </div>
                    <div>
                        <p>Descarga nuestra aplicación móvil</p>
                        <ul>
                            <li><Link to=''><img src={appStore} className='store'></img></Link></li>
                            <li><Link to='https://play.google.com/store/apps/details?id=mx.impulsaasesores.togo'><img src={playStore} className='store'></img></Link></li>
                        </ul>
                    
                    </div>
                </div>
            </div>


            <div className='footer-lower-content'>
                <div className='footer-lower-content-foot'>
                    <p>© {getCurrentYear()} Impulsa Asesores. Todos los derechos reservados</p>
                    <div className='footer-social'>
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                        <FontAwesomeIcon icon={faTwitter} size='2x' />
                        <FontAwesomeIcon icon={faGoogle} size='2x' />
                        <FontAwesomeIcon icon={faWhatsapp} size='2x' />
                    </div>
                </div>
            </div>

        </footer>
    );
}