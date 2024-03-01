import { formatLocalDate } from 'utils/format';

import './styles.scss';

function SecondaryCard({ title, description, publishedAt, urlToImage, url, source }) {

    // Define tamanho da descrição a ser exibida
    // Comentado porque o retorno da API está vindo sempre com description e outros campos null
    /*let desc = description;
    console.log(desc);
    if (desc.length > 120) {
        desc = desc.substring(0, 120) + '...'
    }
    if(desc == null) {
        desc = '';
    }*/

    return (
        <div className="secondary-card-container">
            <div className="secondary-card-image" style={{ backgroundImage: `linear-gradient(360deg, rgb(19, 19, 31) 0%, rgba(19, 19, 31, 0) 80%), url(${urlToImage})` }}>
                <div>
                    <p className="base-button card-category-secondary">{source}</p>
                </div>
            </div>

            <div className="secondary-card-info">
                <h4>{title}</h4>
                <p className="secondary-card-info-description">{description}</p>
                <p className="secondary-card-data">{formatLocalDate(publishedAt, "dd/MM/yyyy")}</p>
                <div className="read-news-button-container">
                    <a
                        href={url.startsWith('www') || !url.startsWith('http') || !url.startsWith('https') ?
                            'https://'.concat(url) : url}
                        target="_blank"
                        rel="noreferrer"
                        className="base-button read-news-button"
                    >
                        Ler notícia
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SecondaryCard;