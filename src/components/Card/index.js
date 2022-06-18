import Source from 'components/Source';

import './styles.scss';

function Card({ title, urlToImage, source }) {
    return (
        <div className={source ? 'card card-source' : 'card end'} style={{backgroundImage: `linear-gradient(360deg, rgb(19, 19, 31) 0%, rgba(19, 19, 31, 0) 100%), url(${urlToImage})`}}>
            {source && 
                <Source source={source} />
            }
            <h4>{title}</h4>
        </div>
    );
}

export default Card;