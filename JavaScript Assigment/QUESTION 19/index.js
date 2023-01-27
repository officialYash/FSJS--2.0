// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

const countries = ["India", "USA", "China", "Brazil", "Canada", "Mexico", "Australia"];

//exporting variable countries, so that we can import it in other files

// In commonJS Environment we use module.exports instead of export
module.exports = countries;