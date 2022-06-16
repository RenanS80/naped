import Card from 'components/Card';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';

import './styles.scss';

function Animes() {
    return (
        <section className="section-category">
            <div className="container">
                <div className="category-banner animes">
                    <div className="category-banner-title">
                        <h1>Animes</h1>
                        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
                    </div>
                </div>

                <SearchBar />

                <div className="category-card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                <div className="pagination-card-container">
                    <Pagination />
                </div>
            </div>
        </section>

    );
}

export default Animes;