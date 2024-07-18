import Rodape from '../Rodape';
import CardSugestoes from './CardSugestoes';
import './Sugestoes.css';

const Sugestoes = () => {
    return(
        <section className="sugestoes">
            <div className='container-sugestoes'>
                <CardSugestoes 
                    imagem='https://github.com/Arthutstuts96.png' 
                    textoAzul='Mudar'
                    subtexto='Tuti'>
                    arthurlim_bhd
                </CardSugestoes>
                <div className='sugestoes-para-voce'>
                    <p>Sugestões para você</p>
                    <p className='ver-tudo'>Ver tudo</p>
                </div>
                <ul className='lista-sugestoes'>
                    <li><CardSugestoes 
                        imagem='/imagens/cecilia.jpeg' 
                        textoAzul='Seguir'
                        subtexto='Sugestões para você'>
                        dduarte_ceci
                    </CardSugestoes></li>
                    <li><CardSugestoes 
                        imagem='/imagens/kaua.jpeg' 
                        textoAzul='Seguir'
                        subtexto='Sugestões para você'>
                        kauaduarte_
                    </CardSugestoes></li>
                    <li><CardSugestoes 
                        imagem='/imagens/perfil-padrao.png' 
                        textoAzul='Seguir'
                        subtexto='Sugestões para você'>
                        emanema123
                    </CardSugestoes></li>
                </ul>
                <Rodape />
            </div>
        </section>
    )
}
export default Sugestoes;
