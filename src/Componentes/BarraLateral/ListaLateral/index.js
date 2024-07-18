import ItemLista from '../ItemLista';
import './ListaLateral.css';
// Ícones dos itens da lista
import { MdHomeFilled, MdSearch, MdMovie } from "react-icons/md";
import { IoMdCompass } from "react-icons/io";
import { FaFacebookMessenger, FaHeart, FaPlusSquare} from "react-icons/fa";

const ListaLateral = () => {
    return (
        <ul className='lista-lateral'>
            <li><ItemLista icone={<MdHomeFilled className='icone'/>} ativada={true}>Página inicial</ItemLista></li>
            <li><ItemLista icone={<MdSearch className='icone'/>}>Pesquisar</ItemLista></li>
            <li><ItemLista icone={<IoMdCompass  className='icone'/>}>Explorar</ItemLista></li>
            <li><ItemLista icone={<MdMovie className='icone'/>}>Reels</ItemLista></li>
            <li><ItemLista icone={<FaFacebookMessenger className='icone'/>}>Mensagens</ItemLista></li>
            <li><ItemLista icone={<FaHeart className='icone'/>}>Notificações</ItemLista></li>
            <li><ItemLista icone={<FaPlusSquare className='icone'/>}>Criar</ItemLista></li>
            <li><ItemLista icone={<img 
                src='https://github.com/Arthutstuts96.png' 
                alt='Imagem do perfil do instagram' 
                className='foto-perfil' />}
            >Perfil</ItemLista></li>
        </ul>
    );
}
export default ListaLateral;
