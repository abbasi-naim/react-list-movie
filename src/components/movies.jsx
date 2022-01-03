import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td key={movie}>{movie.title}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
