import Category from 'components/Category';

import './styles.scss';

function Card(props) {
    return (
        <div className="card">
            {props.category ? (<Category content="games" link="games" />) : ''}
            
            <h4 className={props.category ? '' : 'card-without-category'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada.</h4>
        </div>
    );
}

export default Card;