import './css/Branches.css';

import fiMap from '../../../assets/fianzas/map-fianzas.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Branches = () => {

    return (
        <div className="branches-fianzas">
            <div className='branches-upper-content'>
                    <h1>Oficinas</h1>
                    <p>La experiencia de usuario y la cercanía con nuestros clientes es nuestra prioridad, por eso contamos con 9 oficinas en los estados de Chiapas, Tabasco, Estado de México y Ciudad de México.</p>
            </div>
            <div className='branches-lower-content'>
                
                <div className='branches-detail'>
                    <Link to='/fianzas/oficinas'><img src={fiMap} alt='mapa de sucursales'></img></Link>
                </div>
                
                <div className='branches-detail vertical-centered'>
                    <ul>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Cuidad de México</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Estado de México</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Veracruz</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Villahermosa</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Ocosingo</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> San Cristobal</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Comitán</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Tuxtla Gutiérrez</p></li>
                        <li><p><FontAwesomeIcon icon={faCircleCheck} size='1x' className='bullet-point' /> Tapachula</p></li>
                    </ul>
                </div>
                

            </div>
        </div>

    )
}