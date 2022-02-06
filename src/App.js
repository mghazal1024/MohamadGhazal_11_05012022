import './App.scss';
import listingsData from './listings-data.json'

import Header from './Components/Header/header';
import React from 'react';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Homepage from './pages/Homepage/homepage';
import PropertyPage from './pages/PropertyPage/propertyPage'
import AboutPage from './pages/AboutPage/aboutPage'
import Page404 from './pages/Page404/page404';



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
            <Route
              path='/a-propos'
              element = {
                <AboutPage></AboutPage>
              }
            />
            <Route path="/404" element={<Page404></Page404>} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </main>
      </Router>
    )
  }

}
export default App;




