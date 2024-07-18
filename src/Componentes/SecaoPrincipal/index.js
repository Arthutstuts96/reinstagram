import Postagens from '../Postagens';
import Sugestoes from '../Sugestoes';
import './SecaoPrincipal.css';

const SecaoPrincipal = () => {
    return (
        <main>
            <Postagens />
            <Sugestoes />
        </main>
    );
}
export default SecaoPrincipal;
