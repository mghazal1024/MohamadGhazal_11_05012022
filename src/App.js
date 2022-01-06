import logo from './logo.svg';
import './App.scss';
import listingsData from './listings-data.json'

import Header from './Components/Header/header';
import Banner from './Components/Banner/banner';
import Listings from './Components/Listings/listings';
import React from 'react';


class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      data: listingsData
    }
  }
  
  render() {
    return (
      <>
      <Header></Header>
      <main className='page-content page-content__accueil'>
        <Banner></Banner>
        <Listings
          listingsData = {this.state.data}
        ></Listings>
      </main>
      </>
    );
  }

}
export default App;
