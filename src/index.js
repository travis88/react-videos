import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import { API_KEY } from '../src/secret';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('oasis');
    }
    
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        const videos = this.state.videos;
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        videos={videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
