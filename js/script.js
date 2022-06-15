import { tvShows } from "./tvShowsBD.js";
const highestTVShow = document.querySelector(".highest-TV-show");
const n = 2;

/**
 * This function sort the tvShows array by score and tiebreaker by numRatings 
 * @param {Array} tvShows- The array of tv shows
 */
function sortByScore(tvShows) {
    tvShows.sort((a, b) => {
        if (b.score === a.score) {
            return b.numRatings - a.numRatings;
        }
        return b.score - a.score;
    })
    displayHighestTVShow(tvShows);
}
sortByScore(tvShows);

/**
 * This function display the two highest tvShows array by score
 * @param {Array} tvShows- The array of tv shows orderly by score and ratings  
 */
function displayHighestTVShow(tvShows) {
    for (let i = 0; i < n; i++) {
        highestTVShow.innerHTML += `<li>
                                    <h3>Title: ${tvShows[i].title}</h3>
                                    <h4>Score: ${tvShows[i].score}</h4>
                                    <h5>Ratings: ${tvShows[i].numRatings}</h5>
                                    </li>`;
    }
}