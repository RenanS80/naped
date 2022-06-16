import { Link } from 'react-router-dom';
import { ReactComponent as ErrorImg } from 'assets/images/covers/error-vector.svg';

import './styles.scss';

function NotFound() {
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found-content-container">
                    <h1>Temos más notícias para você!</h1>
                    <p>A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
                    <div>
                        <Link to="/" className="base-button back-home-button">Voltar a home</Link>
                    </div>
                </div>

                <div className="not-found-image-container">
                    <div className="not-found-image">
                        <ErrorImg />
                    </div>
                    <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
                </div>
            </div>
        </section>
    );
}

export default NotFound;