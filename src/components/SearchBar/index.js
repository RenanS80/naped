import SearchIcon from 'assets/images/icons/search.svg';

import './styles.scss';

function SearchBar() {
    return (
        <div className="search-bar">
            <form>
                <div className="form-input">
                    <span className="icon">
                        <img src={SearchIcon} alt="Icon search" />
                    </span>
                    <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;