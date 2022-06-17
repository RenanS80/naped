import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from 'utils/requests';
import SearchBar from 'components/SearchBar';
import Pagination from 'components/Pagination';

import './styles.scss';

function Business() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/top-headlines?country=pt&category=business&pageSize=100&apiKey=${API_KEY}`)
            .then(response => {
                setArticles(response.data.articles);
            })
    }, []);

    return (
        <section className="section-category">
            <div className="container">
                <div className="category-banner business">
                    <div className="category-banner-title">
                        <h1>Negócios</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                </div>

                <SearchBar />

                <Pagination data={articles} />

            </div>
        </section>
    );
}

export default Business;