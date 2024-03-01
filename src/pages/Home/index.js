import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/requests';
import SecondaryCard from 'components/SecondaryCard';
import Card from 'components/Card';
import LatestNewsSection from 'components/LatestNewsSection';

import './styles.scss';
import Source from 'components/Source';

function Home() {

    const [articles, setArticles] = useState([]);
    const [secondaryArticles, setSecondaryArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=3&category=entertainment&apiKey=${API_KEY}`)
            setArticles(res.data.articles);
        }

        getArticles();
    }, []);

    useEffect(() => {
        const getSecondaryArticles = async () => {
            const res = await axios.get(`${BASE_URL}/top-headlines?country=pt&pageSize=6&apiKey=${API_KEY}`)
            setSecondaryArticles(res.data.articles);
        }

        getSecondaryArticles();
    }, []);

    console.log('ARTICLES: ' +articles);
    console.log('ARTICLES: ' +articles.title);

    return (
        <main className="main-home">
            <div className="container">
                <section className="hero">
                    <div className="hero-title">
                        <h1>Mundo conectado? Naped!</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo e outros assuntos relacionados.</p>
                    </div>
                    <div className="hero-content">
                        <div className="main-card">
                            <Source source="Tecnoblog" />
                            <a
                                href="https://tecnoblog.net/noticias/2022/06/02/resident-evil-4-remake-e-oficial-e-chega-em-2023-para-ps5-e-psvr2/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3>Resident Evil 4 Remake é oficial e chega em 2023 para PS5, Xbox Series e PC.</h3>
                            </a>
                        </div>

                        <div className="main-small-card small-1">
                            <Source source="IGN" />
                            <a
                                href="https://br.ign.com/the-last-of-us-part-i-remake/99075/news/remake-de-the-last-of-us-pode-chegar-em-setembro-para-ps5-segundo-vazamento"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3>Remake de The Last of Us é confirmado para PS5. Game chega em setembro.</h3>
                            </a>
                        </div>

                        <div className="main-small-card small-2">
                            <Source source="Goal" />
                            <a
                                href="https://www.goal.com/br/not%C3%ADcias/maiores-reforcos-transferencias-neymar-cr7-bale-mbappe/1t56pqk0k5jl31duvix28ge5fm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h3>Os reforços mais caros da história do futebol</h3>
                            </a>
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
                                    source={article.source.name}
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
                                        <Card
                                            title={article.title}
                                            source={article.source.name}
                                            urlToImage={article.urlToImage}
                                        />
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