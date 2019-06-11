import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImagList from './ImageList';


class App  extends React.Component {
    state = {images: []};

   onSarchSubmit = async term => {
      const response = await axios.get('https://api.unsplash.com/search/photos' ,{
           params:{ query: term },
        headers:{
            Authorization: 'Client-ID 1ab8c049667aeb58e278f90814f959da20f42fb1794bff22fa7072897c31c3ee'
        }
       });
       
           console.log(response.data.results);
      
            this.setState({images: response.data.results });
    }
    

 render() {
    return (
    <div className="ui container" style={{ marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSarchSubmit}/>
        found: {this.state.images.length} images
        <ImagList images={this.state.images}/>
        </div>
    );
}

}
 export default App;