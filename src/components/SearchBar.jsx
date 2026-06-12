import { useState } from "react";
import fetchSearchBar from '../utils/fetchSearchBar.js'; 
import SearchBarResults from './SearchBarResults.jsx';

function SearchBar() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        fetchSearchBar(search).then((data) => {
            setResults(data);
            setLoading(false);
        });
    };

    const inputHandler = (event) => {
        const target = event.target;
        const { value } = target;
        setSearch(value);
    }

    return (
        <div className='mb-5'>
            <form onSubmit={submitHandler} className='input-group mx-auto' style={{ maxWidth: '500px' }}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Digita qui le patate che desideri'
                    value={search}
                    onChange={inputHandler}
                />
                <button className='btn btn-warning' type='submit'>
                    Patata!
                </button>
            </form>

            <div className='search-results-container mt-4'>
                <SearchBarResults results={results} loading={loading} />
            </div>
        </div>
    );
}

export default SearchBar;
