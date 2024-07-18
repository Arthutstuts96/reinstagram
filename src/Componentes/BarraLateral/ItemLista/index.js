import './ItemLista.css';

const ItemLista = ({children, icone, ativada=false, link=''}) => {
    return(
        <a href={link} className={`item-lista ${ativada? 'ativada': ''}`}>
            {icone}
            {children}
        </a>
    );
}
export default ItemLista;
