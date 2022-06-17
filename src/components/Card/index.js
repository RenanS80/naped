import Category from 'components/Category';

import './styles.scss';

function Card({ title, category, urlToImage }) {
    return (
        <div className="card" style={{backgroundImage: `linear-gradient(360deg, rgb(19, 19, 31) 0%, rgba(19, 19, 31, 0) 100%), url(${urlToImage})`}}>
            <Category category={category} />
            <h4>{title}</h4>
        </div>
    );
}

export default Card;