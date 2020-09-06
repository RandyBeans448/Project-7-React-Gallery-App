import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';

import PhotoList from './Components/PhotoList';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';
import Waterfall from './Components/Waterfall';
import Sunsets from './Components/Sunsets';
import Mountains from './Components/Mountains';
import './index.css';
import apiKey from './config';

//importing all nesssary components to the app.


//setting the set have to a onject with an empty array on pictures
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      pictures: [],
      waterfalls: [],
      sunsets: [],
      mountains: []
    };
  };

  //componentDidMount calls when everything on the page as been rendered and makes the API request.

  componentDidMount() {
    this.performSearch();
  }

performSearch = (query = 'Sea Coast') => {
  let openingAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=25&format=json&nojsoncallback=1`;
  const waterfallsAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=waterfall&per_page=25&format=json&nojsoncallback=1`;
  const sunsetsAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=25&format=json&nojsoncallback=1`;
  const mountainsAPI = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&per_page=25&format=json&nojsoncallback=1`;

  let openingRequest = axios.get(openingAPI) 
  const waterfallRequest = axios.get(waterfallsAPI);
  const sunsetRequest = axios.get(sunsetsAPI);
  const mountainsRequest = axios.get(mountainsAPI);

  axios.all([openingRequest, waterfallRequest, sunsetRequest, mountainsRequest]).then(axios.spread((...response) => {
    const openingResponse = response[0]
      this.setState({
        pictures: openingResponse.data.photos.photo
    });
    const waterfallRequest = response[1]
    this.setState({
      waterfalls: waterfallRequest.data.photos.photo
    });
    const sunsetRequest = response[2]
    this.setState({
      sunsets: sunsetRequest.data.photos.photo
    });
    const mountainsRequest = response[3]
    this.setState({
      mountains: mountainsRequest.data.photos.photo
    });
    // use/access the results 
  })).catch(error => {
    console.log('API request failed', error)
    // react on errors.
  })
 
  } 

//rendering all of the routes and paths for the projet.
// <Photo/>  gets passed the data from the API request so that it can be acessed in the photo component.

render () {
  if(!this.state.pictures.length) {
    return <div>Loading...</div>
  }
    return (
      <BrowserRouter>
          <div>
            <SearchBar onSearch={this.performSearch}/>        
              <Nav />
                <Switch>
                    <Route exact path="/ " />
                    <Route path="/notfound" render={ () => <NotFound /> } />
                    <Route path="/search" render={ () => <PhotoList data={this.state.pictures}/> } />
                    <Route path="/waterfall" render={ () => <Waterfall data={this.state.waterfalls}/> } />
                    <Route path="/sunsets" render={ () => <Sunsets data={this.state.sunsets}/> } />
                    <Route path="/mountains" render={ () => <Mountains data={this.state.mountains} /> } />
                </Switch>
                
          </div>
      </BrowserRouter> 
    );
  }
}
