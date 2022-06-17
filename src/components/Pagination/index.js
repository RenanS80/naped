import { ReactComponent as ArrowIcon } from 'assets/images/icons/arrow.svg';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import './styles.scss';

function Pagination(props) {

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    
    const { data } = props;
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="category-card-container">

                {currentItems.map((article, key) => (
                    <div key={key}>
                        <a
                            href={article.url.startsWith('www') || !article.url.startsWith('http') || !article.url.startsWith('https') ?
                                'https://'.concat(article.url) : article.url}
                            target="_blank"
                            rel="noreferrer">
                            <Card title={article.title} category={article.category} urlToImage={article.urlToImage} />
                        </a>
                    </div>
                ))}

            </div>

            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                containerClassName="pagination-container"
                pageLinkClassName="pagination-item arrow-active"
                breakClassName="pagination-item"
                previousLabel={<div className="pagination-item"><ArrowIcon /></div>}
                previousClassName="arrow-previous"
                nextLabel={<div className="pagination-item"><ArrowIcon /></div>}
                nextClassName="arrow-next"
                activeLinkClassName="pagination-link-active"
                disabledClassName="arrow-inactive"
                onPageChange={handlePageClick}
            />
        </>
    );
}

export default Pagination;