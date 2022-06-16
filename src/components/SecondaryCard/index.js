import { Link } from 'react-router-dom';
import './styles.scss';

function SecondaryCard() {
    return (

        <div className="secondary-card-container">
            <div className="secondary-card-image">
                <div>
                    <Link to="/games" className="base-button card-category-secondary">Games</Link>
                </div>
            </div>

            <div className="secondary-card-info">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...</p>
                <p className="secondary-card-data">00/00/0000</p>
                <div className="read-news-button-container">
                    <Link to="/games" className="base-button read-news-button">Ler notícia</Link>
                </div>
            </div>
        </div>
    );
}

export default SecondaryCard;