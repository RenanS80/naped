import SearchIcon from 'assets/images/icons/search.svg';
import { useForm } from 'react-hook-form';

import './styles.scss';

function SearchBar({ onSubmitFilter }) {

    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        onSubmitFilter(formData);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input">
                    <span className="icon">
                        <button>
                            <img src={SearchIcon} alt="Icon search" />
                        </button>
                    </span>
                    <input
                        {...register('title')}
                        name='title'
                        type="text"
                        placeholder="Pesquise aqui"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;