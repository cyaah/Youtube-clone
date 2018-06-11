import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoListItem from './video_list_item';
import VideoDetail from './video_details';

const ApiKey = 'AIzaSyA8rUCDXexRg9Tp7l3O35l-tFb26Oo9AC8';


export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [],
                       selectedVideo : null
		 };

		 this.videoSearch('surfboards');
	}

	videoSearch(term) {
	  	YTSearch({key: ApiKey, term: term}, (videos) => { 
			this.setState({ videos, selectedVideo: videos[0] });
		}); 
	}

  render() {
    return (
      <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail videos={this.state.selectedVideo} />
      <VideoList 
        onVideoSelect={selectedVideo =>this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
    );
  }
}
