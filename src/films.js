

//const movies = require("./data");


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  //array result holds a map method which passed the dir object, call by the function.
  let result = array.map(dir=> dir.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  //filter methode called array parameter to create a new array of objects
  //that match the condition film.director=== director (director is a parameter)
  let result = array.filter(film => film.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}



// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array,director) {
  //with filter returns a new array with the director parameter.
  let filteredMovies = array.filter(film => film.director === director);
  //console.log(filteredMovies);
  //reduce method applies a function to each element of the array,
  //to reduce it to a single value. In this case, the function takes two arguments: acc (an accumulator variable that holds the running total of the scores) 
  //and movie (the current movie object being processed). The function adds the score of the current movie to the accumulator variable (acc + movie.score), 
  //and starts the accumulator variable at 0 with the initial value of the second argument to the reduce method.
  let totalScore = filteredMovies.reduce((acc, movie) => acc + movie.score, 0);
    //calculate the average with a conditional 0? if there are movies  or not of the director scored
    let average = filteredMovies.length > 0 ? totalScore / filteredMovies.length : 0;
    console.log("EXERCICE 3 ->", average);
    return average;
  }


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    //using sort to order it by titles.
    let titles = array.map(movie => movie.title).sort();
    console.log("EXERCICE 4 ->", titles);
    return titles.slice(0, 20);
  }


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let years = array.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  let newYearsArray= years.map(({title, year}) => ({title, year}));

  /*let years = [movies.sort((a,b) => b.year - a.year)][0];*/
  console.log("EXERCICE 5 ->", newYearsArray);
  return newYearsArray;
}


function moviesAverage() {
    let totalScore = movies.reduce((acc, movie) => acc + movie.score, 0);
    let average = movies.length > 0 ? totalScore / movies.length : 0;
    console.log("EXERCICE 3 ->", average);
    return average;
  }

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let filteredMovies = array.filter(film => film.genre.includes(genre));
  let totalScore = filteredMovies.reduce((acc, movie) => acc + movie.score, 0);
  let average = filteredMovies.length > 0 ? totalScore / filteredMovies.length : 0;
    console.log("EXERCICE 6 ->", average.toFixed(2));
    return parseFloat(average.toFixed(2));
  }
 

 

// Exercise 7: Modify the duration of movies to minutes.
function hoursToMinutes(array) {
  // map creates a new array with the same number of elements.
  // Then applies a callback function to each element of the input array and returns a new array.

  let convertedMovies = array.map(obj => {
    //console.log(obj.duration); // debugging line-check values.
    
    // For each object in the input array, the callback function extracts the `duration` property and splits it into number of hours and number of minutes.
     const [hours, minutes] = obj.duration.split(`h`);
    //console.log(hours, minutes); // debugging line-check split and values
    //`hours` and `minutes` strings are converted to numbers using the `parseInt` function with a base of 10.
    // The duration in minutes is calculated by multiplying the number of hours by 60 and adding the number of minutes.
    const durationInMinutes = parseInt(hours, 10) * 60 + (minutes ? parseInt(minutes, 10) : 0);
    //console.log(durationInMinutes); // debugging line-check nan
    return {...obj, duration: durationInMinutes};
  });
  console.log(convertedMovies);
  return convertedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesOfYear = array.filter(movie => movie.year === year); // filter movies of the given year
  const bestMovie = moviesOfYear.reduce((acc, curr) => {
    return curr.score > acc.score ? curr : acc; // find the movie with the highest rating
  }, { score: 0 }); // initialize the accumulator object with a rating of 0
  console.log(bestMovie);
  return [bestMovie]; // return the best movie in a new array
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
