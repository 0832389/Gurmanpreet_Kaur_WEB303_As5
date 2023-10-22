/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem {
  constructor(id, name, description, categoryGenre) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.categoryGenre = categoryGenre;
  }

  updateContentItem(id, name, description, categoryGenre) {
    if (this.id === id) {
      if (name !== null) this.name = name;
      if (description !== null) this.description = description;
      if (categoryGenre !== null) this.categoryGenre = categoryGenre;
    }
  }

  toString() {
    return `
      <div class="content-item-wrapper" id="content-item-${this.id}">
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        <div>${this.categoryGenre}</div>
      </div>
    `;
  }
}

// Create an array of 5 ContentItems with your content
const contentItems = [
  new ContentItem(0, "Amitabh Bachchan", "Description:He is known for his action films. He received numerous awards for his performance in the film industry. ", "Category:Winner of National Film Award for his portrayal of a mafia din in Agneepath. "),
  new ContentItem(1, "Dilip Kumar", "Description: He is widely considered as the greatest exponent India ever produced.", "Category: One of the top 100 Bollywood Actors."),
  new ContentItem(2, "Aamir Khan", "Discription: He is the actor who has great success in both Indian and Chinese film market.", "Category: Mr. Perfectionist of Bollywood."),
  new ContentItem(3, "Rajesh Khanna", "Discription: The most popular actor in the history of cinema. The only actor to enjoy near Gold-like status.", "Category: He is the history of world cinema."),
  new ContentItem(4, "Guru Dutt", "Discription: He is considered to be a man ahead of his time. He was the greatest icons of commercial Indian Cinema.", "Category: One of the famous Bollywood Actors."),
];

$(document).ready(function () {
  const contentList = $("#content-item-list");

  // Add content items to the page
  contentItems.forEach(function (item) {
    const itemHtml = item.toString();
    contentList.append(itemHtml);
  });

  // Apply CSS styles to content item wrappers
  $(".content-item-wrapper").css({
    border: "1px solid #ccc",
    width: "300px",
    padding: "10px",
    margin: "10px auto",
  });
  
});


});


