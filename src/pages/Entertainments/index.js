import axios from 'axios';
import Card from 'components/Card';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from 'utils/requests';

import './styles.scss';

function Entertainments() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=9&category=entertainment&apiKey=${API_KEY}`)

            setArticles(res.data.articles);
            console.log(res);
        }

        getArticles();
    }, []);

    return (
        <section className="section-category">
            <div className="container">
                <div className="category-banner entertainment">
                    <div className="category-banner-title">
                        <h1>Entretenimento</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                </div>

                <SearchBar />

                <div className="category-card-container">

                    {articles.map((article, key) => (
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

                <div className="pagination-card-container">
                    <Pagination />
                </div>
            </div>
        </section>

    );
}

export default Entertainments;