import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoListItem from './video_list_item';


const ApiKey = 'AIzaSyA8rUCDXexRg9Tp7l3O35l-tFb26Oo9AC8	';


export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		YTSearch({key: ApiKey, term:'surfboards'}, (videos) => { 
			this.setState({ videos });
		}); 
	}
  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
