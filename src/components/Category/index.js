import { Link } from 'react-router-dom';
import './styles.scss';

function Category(props) {
    return (
        <div>
            <Link to={`/${props.link}`} className="base-button card-category">{props.content}</Link>
        </div>

    );
}

export default Category;