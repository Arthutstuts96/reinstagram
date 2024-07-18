const CardStories = ({imagem, nomeConta}) => {
    return(
        <div className="card-stories">
            <img src={imagem} alt="Imagem do perfil do stories" className="foto-perfil-stories"/>
            <p className="nome-conta-stories">{nomeConta}</p>
        </div>
    )
}
export default CardStories;
