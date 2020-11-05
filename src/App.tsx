import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import SortPannel from './components/SortPannel';
import Loading from './components/Loading';
import movies from './movies.json';
import './App.scss';


class App extends Component {
  state = {
    movies: [],
    isLoading: false,
    tempListOfMovies: []
  }

  componentDidMount(){
    this.setState({isLoading:true});
    setTimeout(()=>{
      this.setState({movies: movies, isLoading: false, tempListOfMovies: movies})
  },2000)
}

  render(){
    return (
      <div className="app">
       <Header/>
       <Loading isLoading={this.state.isLoading}/>
       <SortPannel/>
       <Movies movies={this.state.tempListOfMovies}/>
       <Footer/>
     </div>
  )
  }
}

export default App;
