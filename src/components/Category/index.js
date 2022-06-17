import { Link } from 'react-router-dom';
import './styles.scss';

function Category({ category }) {
    return (
        <div>
            <Link to="link" className="base-button card-category">{category}</Link>
        </div>

    );
}

export default Category;