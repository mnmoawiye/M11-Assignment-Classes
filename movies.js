// Define the Movie class
class Movie {
  #title;
  #cast;
  #description;
  #rating;
  
  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  updateRating(newRating) {
    this.#rating = newRating;
  }
  
  displayInfo() {
    const info = document.getElementById("movieInfo");
    info.innerHTML= `
    <p><strong>Title:</strong> ${this.#title}</p>
    <p><strong>Cast:</strong> ${this.#cast}</p>
    <p><strong>description:</strong>${this.#description}</p>
    <p><strong>rating:</strong>${this.#rating}</p>
    <hr />
    `
  }

    getTitle() {
      return this.#title;
    }

  const rushHour = new Movie(
    
  )
}
  // title, cast, description, rating

  // Method to update the rating of the movie

  // Method to display the movie's information


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie