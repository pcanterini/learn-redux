import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoInfo from './components/video_info';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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
    const searchVideo = _.debounce( term => this.searchVideo(term), 300 );
    return(
      <div>
        <SearchBar term={this.state.term} onInputChange={searchVideo} />
        <VideoInfo video={this.state.activeVideo}/>
        <VideoList onVideoClick={ activeVideo => this.setState({activeVideo}) } videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.app'));
