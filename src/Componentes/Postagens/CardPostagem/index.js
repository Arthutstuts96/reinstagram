import { useState } from "react";
import { FaRegBookmark, FaBookmark, FaRegHeart, FaHeart, FaRegComment, FaComment, FaLocationArrow } from "react-icons/fa";

const CardPostagem = ({imagemPostagem, imagemPerfil, nomePerfil, numCurtidas, descricao}) => {
    const [like, setLike] = useState(false);
    
    function mudarBotaoDeLike(){
        setLike(!like);
    }
    return (
        <>
            <div className='card-postagem'>
                <div className="area-perfil">
                    <div className="foto-nome">
                        <img src={imagemPerfil} alt="Imagem do perfil" className="foto-perfil-postagem"/>
                        <span className="paragrafo-negritado">{nomePerfil}</span><p>· 55 min</p>    
                    </div>
                    <p className="paragrafo-negritado mais">...</p>
                </div>
                <img src={imagemPostagem} alt="Imagem da postagem" className="imagem-postagem"/>
                <div className="icones-interacao">
                    <div className="icones-interacao-lado-direito">
                        {like
                            ? <FaHeart className="icone" onClick={mudarBotaoDeLike} style={{color: "red"}}/>
                            : <FaRegHeart className="icone" onClick={mudarBotaoDeLike}/>
                        }
                        <FaRegComment className="icone"/>
                        <FaLocationArrow className="icone"/>
                    </div>
                    <FaRegBookmark className="icone"/>
                </div>
                <p className="paragrafo-negritado">{numCurtidas} curtidas</p>
                <p className="descricao"><span className="paragrafo-negritado">{nomePerfil}</span> {descricao}</p>
                <p>Ver tradução</p>
                <textarea placeholder="Adicione um comentário..." className="caixa-comentarios"/>
            </div>
            <hr></hr>
        </>
    )
}
export default CardPostagem;
