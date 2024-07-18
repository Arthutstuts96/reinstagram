const CardSugestoes = ({children, imagem, textoAzul, subtexto}) => {
    return(
        <div className="card-sugestoes">
            <div className="card-lado-direito">
                <img src={imagem} alt='perfil' className="foto-perfil-sugestoes"/>
                <div className="textos">
                    <p className="nome-perfil">{children}</p>
                    <p className="subtexto">{subtexto}</p>
                </div>
            </div>
            <p className="texto-azul">{textoAzul}</p>
        </div>
    );
}
export default CardSugestoes;
