// Define the Movie class
class Movie {
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Private fields
  #title;
  #cast;
  #description;
  #rating;

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const infoDiv = document.getElementById("movie-info");
    infoDiv.innerHTML = `
      <p><strong>Title:</strong> ${this.#title}</p>
      <p><strong>Cast:</strong> ${this.#cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.#description}</p>
      <p><strong>Rating:</strong> ${this.#rating}</p>
      <hr />
    `;
  }

  // Getter for title (used outside class)
  getTitle() {
    return this.#title;
  }
}

// Create and display the movie
const rushHour = new Movie(
  "Rush Hour",
  ["Jackie Chan", "Chris Tucker"],
  "A Hong Kong detective and a loudmouthed LAPD officer team up to rescue a kidnapped girl.",
  8.2
);

// Create the collection and add the movie
const movies = [];
movies.push(rushHour);

// Display initial information
rushHour.displayInfo();

// Function to update a movie rating by title
function updateMovieRating(title, newRating) {
  for (let movie of movies) {
    if (movie.getTitle() === title) {
      movie.updateRating(newRating);
      movie.displayInfo();
      break;
    }
  }
}

// Update the rating and show updated info
updateMovieRating("Rush Hour", 8.5);
