import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/requests';
import { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
import Pagination from 'components/Pagination';

import './styles.scss';

function Entertainments() {

    const [articles, setArticles] = useState([]);

    const [controlComponentData, setControlComponentData] = useState({
        filterData: {title: ''}
    });

    const handleSubmitFilter = (data) => {
        setControlComponentData({filterData: data})
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/top-headlines?country=pt&category=entertainment&pageSize=100&q=${controlComponentData.filterData.title}&apiKey=${API_KEY}`)
            .then(response => {
                setArticles(response.data.articles);
            })
    }, [controlComponentData]);

    return (
        <section className="section-category">
            <div className="container">
                <div className="category-banner entertainment">
                    <div className="category-banner-title">
                        <h1>Entretenimento</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                </div>

                <SearchBar onSubmitFilter={handleSubmitFilter} />

                <Pagination data={articles} />

            </div>
        </section>
    );
}

export default Entertainments;