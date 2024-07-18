import { FaBars } from 'react-icons/fa';
import ItemLista from './ItemLista';
import ListaLateral from './ListaLateral';
import './BarraLateral.css';

const BarraLateral = () => {
    return (
        <aside className='barra-lateral'>
            <a href='#' className='reinstagram-logo'>Reinstagram</a>
            <ListaLateral />
            <ItemLista icone={<FaBars className='icone'/>} link='#'>Mais</ItemLista>
        </aside>
    );
}
export default BarraLateral;
