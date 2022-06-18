import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from 'utils/requests';
import Card from 'components/Card';

import './styles.scss';

function LatestNewsSection() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=6&apiKey=${API_KEY}`)

            setArticles(res.data.articles);
            console.log(res);
        }

        getArticles();
    }, []);

    return (
        <section className="latest-news-container">
            <div className="latest-news-title">
                <h3>Notícias mais recentes</h3>
            </div>

            <div className="latest-news-card-container">

                {articles.map((article, key) => (
                    <div key={key}>
                        <a
                            href={article.url.startsWith('www') || !article.url.startsWith('http') || !article.url.startsWith('https') ?
                                'https://'.concat(article.url) : article.url}
                            target="_blank"
                            rel="noreferrer">
                            <Card 
                                title={article.title} 
                                source={article.source.name} 
                                urlToImage={article.urlToImage} 
                            />
                        </a>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default LatestNewsSection;