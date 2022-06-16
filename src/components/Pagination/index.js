import './styles.scss';
import { ReactComponent as ArrowIcon } from 'assets/images/icons/arrow.svg';

function Pagination(){
    return(
        <div className="pagination-container">
            <div className="pagination-item">
                <ArrowIcon className="arrow-previous" />
            </div>
            <div className="pagination-item pagination-number active">1</div>
            <div className="pagination-item pagination-number">2</div>
            <div className="pagination-item pagination-number">...</div>
            <div className="pagination-item pagination-number">9</div>
            <div className="pagination-item pagination-number">10</div>
            <div className="pagination-item arrow-next">
                <ArrowIcon  />
            </div>
        </div>
    );
}

export default Pagination;