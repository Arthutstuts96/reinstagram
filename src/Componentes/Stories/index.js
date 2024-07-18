import CardStories from './CardStories';
import './Stories.css';

const Stories = () => {
    return (
        <section className='stories'>
            <ul className='lista-stories'>
                <CardStories imagem='https://github.com/Arthutstuts96.png' nomeConta='arthur_lima'/>
                <CardStories imagem='/imagens/perfil-padrao.png' nomeConta='joão_bosco'/>
                <CardStories imagem='/imagens/perfil-padrao.png' nomeConta='vinícius'/>
                <CardStories imagem='/imagens/perfil-padrao.png' nomeConta='john'/>
                <CardStories imagem='/imagens/perfil-padrao.png' nomeConta='animes'/>
                <CardStories imagem='/imagens/kaua.jpeg' nomeConta='kauaduarte_'/>
                <CardStories imagem='/imagens/cecilia.jpeg' nomeConta='dduarte_ceci'/>
                <CardStories imagem='/imagens/perfil-padrao.png' nomeConta='ca'/>
            </ul>
        </section>
    )
}
export default Stories;
