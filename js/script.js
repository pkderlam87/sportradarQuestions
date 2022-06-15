import { tvShows } from "./tvShowsBD.js";
const highestTVShow = document.querySelector(".highest-TV-show");

/**
 * This function sort the tvShows array by score
 * @param {Array} tvShows- The array of tv shows
 */
function sortByScore(tvShows) {
    tvShows.sort((a, b) => {
        return b.score - a.score;
    })
    displayHighestTVShow(tvShows);
}
sortByScore(tvShows);

/**
 * This function display the tvShows array by score
 * @param {Array} tvShows- The array of tv shows orderly by score and ratings  
 */
function displayHighestTVShow(tvShows) {
    for (let i = 0; i < tvShows.length; i++) {
        highestTVShow.innerHTML += `<h1>Title: ${tvShows[i].title}</h1>
                                    <h3>Score: ${tvShows[i].score}</h3>
                                    <h4>Ratings: ${tvShows[i].numRatings}</h4>`;
    }
}