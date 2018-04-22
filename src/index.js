import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../src/secret';
import SearchBar from './components/search_bar'

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'))
