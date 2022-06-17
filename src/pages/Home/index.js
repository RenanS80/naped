import { Link } from 'react-router-dom';
import Category from 'components/Category';
import SecondaryCard from 'components/SecondaryCard';
import Card from 'components/Card';
import LatestNewsSection from 'components/LatestNewsSection';

import './styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/requests';

function Home() {

    const [articles, setArticles] = useState([]);
    const [secondaryArticles, setSecondaryArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=3&category=business&apiKey=${API_KEY}`)

            setArticles(res.data.articles);
            console.log(res);
        }

        getArticles();
    }, []);

    useEffect(() => {
        const getSecondaryArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=6&category=business&apiKey=${API_KEY}`)

            setSecondaryArticles(res.data.articles);
            console.log(res);
        }

        getSecondaryArticles();
    }, []);

    return (
        <main className="main-home">
            <div className="container">
                <section className="hero">
                    <div className="hero-title">
                        <h1>Mundo nerd? Naped!</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                    <div className="hero-content">
                        <div className="main-card">
                            <Category content="games" link="games" />
                            <Link to="/games/1">
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in,
                                    blandit molestie dolor.</h3>
                            </Link>
                        </div>

                        <div className="main-small-card small-1">
                            <Category content="games" link="games" />
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        </div>

                        <div className="main-small-card small-2">
                            <Category content="séries" link="series" />
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        </div>
                    </div>
                </section>

                <section className="secondary-card-wrapper">
                    <div className="secondary-card-list">

                        {secondaryArticles.map((article, key) => (
                            <div key={key}>
                                <SecondaryCard
                                    title={article.title}
                                    urlToImage={article.urlToImage}
                                    publishedAt={article.publishedAt}
                                    description={article.description}
                                    url={article.url}
                                />
                            </div>
                        ))}

                    </div>

                    <aside>
                        <div className="secondary-card-aside-title">
                            <h3>Mais lidas</h3>
                        </div>
                        <div className="secondary-card-aside-container">

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
                    </aside>
                </section>

                <LatestNewsSection />
            </div>
        </main>
    );
}

export default Home;