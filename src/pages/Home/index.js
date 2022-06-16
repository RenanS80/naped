import { Link } from 'react-router-dom';
import Category from 'components/Category';
import SecondaryCard from 'components/SecondaryCard';
import Card from 'components/Card';
import LatestNewsSection from 'components/LatestNewsSection';

import './styles.scss';

function Home() {
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
                        <SecondaryCard />
                        <SecondaryCard />
                        <SecondaryCard />
                        <SecondaryCard />
                        <SecondaryCard />
                        <SecondaryCard />
                    </div>

                    <aside>
                        <div className="secondary-card-aside-title">
                            <h3>Mais lidas</h3>
                        </div>
                        <div className="secondary-card-aside-container">
                            <Card category="Games" />
                            <Card category="Games" />
                            <Card category="Games" />
                        </div>
                    </aside>
                </section>

                <LatestNewsSection />
            </div>
        </main>
    );
}

export default Home;