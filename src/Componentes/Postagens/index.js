import './Postagens.css';
import Stories from '../Stories';
import CardPostagem from './CardPostagem';

const Postagens = () => {
    return(
        <section className='secao-postagens'>
            <Stories />
            <div className='postagens'>
                <ul className='lista-postagens'>
                    <li><CardPostagem 
                        imagemPostagem='/imagens/brasil-imagem.jpg'
                        imagemPerfil='https://github.com/Arthutstuts96.png'
                        nomePerfil='arthurlim_bhd'
                        numCurtidas='1'
                        descricao='asas negras caiam aqui!'
                    /></li>
                    <li><CardPostagem 
                        imagemPostagem='/imagens/chuva.jpg'
                        imagemPerfil='/imagens/cecilia.jpeg'
                        nomePerfil='dduarte_ceci'
                        numCurtidas='1'
                        descricao='Lorem ipsum dolor est ni quenqs'
                    /></li>
                    <li><CardPostagem 
                        imagemPostagem='/imagens/chorao.jpeg'
                        imagemPerfil='/imagens/kaua.jpeg'
                        nomePerfil='kauaduarte_'
                        numCurtidas='123'
                        descricao='Tão natural quanto a luz do dia...'
                    /></li>
                </ul>
            </div>
        </section>
    )
}
export default Postagens;
