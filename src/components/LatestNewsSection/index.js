import Card from 'components/Card';

import './styles.scss';

function LatestNewsSection() {
    return (
        <section className="latest-news-container">
            <div className="latest-news-title">
                <h3>Notícias mais recentes</h3>
            </div>

            <div className="latest-news-card-container">
                <Card category="Games" />
                <Card category="Séries" />
                <Card category="Animes" />
                <Card category="Games" />
                <Card category="Games" />
                <Card category="Séries" />
            </div>
        </section>
    );
}

export default LatestNewsSection;