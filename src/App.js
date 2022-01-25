import logo from './logo.svg';
import './App.scss';
import listingsData from './listings-data.json'

import Header from './Components/Header/header';
import Banner from './Components/Banner/banner';
import Listings from './Components/Listings/listings';
import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/homepage';
import PropertyPage from './Components/PropertyPage/propertyPage';



class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      data: listingsData
    }
  }
  
  render() {
    return (
      <Router>
        <Header></Header>
        <main className='page-content'>
          <Routes>
            <Route index element={<Homepage listingsData={this.state.data} />}/>
            {console.log(this.state.data)}
            {/* <Route path="/property" element={<PropertyPage />}/> */}
            {this.state.data.map( (listing, i) => {
              return (
                <Route 
                  key= {i} 
                  path= {`/${listing.id}`} 
                  element= {<PropertyPage 
                    title= {listing.title}
                    pictures= {listing.pictures}
                    location= {listing.location}
                    host = {listing.host.name}
                    hostPicture = {listing.host.picture}
                    rating = {listing.rating}
                    tags = {listing.tags}
                    description = {listing.description}
                    equipments = {listing.equipments}
                    />}
                />
              )
            })}
          </Routes>
        </main>
      </Router>
    )
  }

}
export default App;
