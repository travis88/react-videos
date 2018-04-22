import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../src/secret';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        const videos = this.state.videos;
        return (
            <div>
                <SearchBar />
                <div className="row">
                    <VideoDetail video={videos[0]} />
                    <VideoList videos={videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
