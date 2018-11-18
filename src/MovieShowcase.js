import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return(
      movieData.map(x=>
        <MovieCard poster={x.poster} title={x.title} IMDBRating={x.IMDBRating} genres={x.genres}/>
      )
      )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
