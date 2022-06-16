import Category from 'components/Category';
import LatestNewsSection from 'components/LatestNewsSection';

import './styles.scss';

function News() {
    return (
        <>
            <main className="main-news">
                <div className="container">
                    <div className="news-title">
                        <h2>The Last of Us Part I Remake é anunciado para PlayStation 5 e PC</h2>
                        <h3>Título foi anunciado durante o evento Summer Game Fest</h3>
                        <p>09 de Junho de 2022</p>
                    </div>

                    <div className="news-content">
                        <div className="news-content-image">
                            <Category content="games" link="games" />
                        </div>

                        <div className="news-content-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros.
                                Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
                                Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus.
                                Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
                                Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
                                Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus.
                                Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
                            </p> <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros.
                                Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
                                Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus.
                                Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
                            </p>
                        </div>

                        <div className="news-content-image-secondary"></div>

                        <div className="news-content-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in mauris vel dolor consectetur scelerisque quis eu eros.
                                Morbi varius eu odio nec vehicula. Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
                                Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus.
                                Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
                                Maecenas blandit nunc vitae enim fermentum, nec ullamcorper magna molestie.
                                Fusce efficitur ipsum ullamcorper tellus pharetra, et vehicula enim feugiat. Sed scelerisque at orci rhoncus dapibus.
                                Donec maximus porttitor mauris. Sed tempus felis sit amet gravida sagittis. Ut eleifend ornare leo et auctor.
                            </p>
                        </div>
                    </div>

                    <LatestNewsSection />
                    
                </div>
            </main>
        </>
    );
}

export default News;