import React from 'react';
import './App.css';
import Nav from  '../Nav/Nav'
import Footer from '../Footer/Footer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      individualMovieCard: []

    }
  }




  render() {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  );
  }
}

export default App;
