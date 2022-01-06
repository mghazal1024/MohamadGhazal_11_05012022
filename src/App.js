import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header/header';
import Banner from './Components/Banner/banner';
import Listings from './Components/Listings/listings';

function App() {
  return (
    <>
    <Header></Header>
    <main className='page-content page-content__accueil'>
      <Banner></Banner>
      <Listings></Listings>
    </main>
    </>
  );
}

export default App;
