import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoInfo from './components/video_info';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDFxQSWqI6btiMIbvWjR6496lgVOcW3bAk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      activeVideo: null
    }
    this.searchVideo('');
  }

  searchVideo = (term) => {

    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        activeVideo: videos[0]
      });
    });
  }

  render() {
    return(
      <div>
        <SearchBar term={this.state.term} onInput={ term => this.searchVideo(term)} />
        <VideoInfo video={this.state.activeVideo}/>
        <VideoList onVideoClick={ activeVideo => this.setState({activeVideo}) } videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.app'));
