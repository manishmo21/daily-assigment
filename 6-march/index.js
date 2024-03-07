const Movie = require('./models/db');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Movie');

async function findMoviesAfter1900() {
    return Movie.find({ released: { $gt: new Date('1900-01-01') } });
}

async function findMoviesRuntimeLessThan60() {
    return Movie.find({ runtime: { $lt: 60 } });
}

async function countMoviesByRating() {
    return Movie.aggregate([{ $group: { _id: "$rated", count: { $sum: 1 } } }]);
}

async function findAverageRuntime() {
    return Movie.aggregate([{ $group: { _id: null, avgRuntime: { $avg: "$runtime" } } }]);
}

async function countTotalMovies() {
    return Movie.countDocuments({});
}

async function findMoviesWithMoreThan3Comments() {
    return Movie.find({ num_mflix_comments: { $gt: 3 } });
}

async function groupMoviesByGenreAndCount() {
    return Movie.aggregate([
        { $unwind: "$genres" },
        { $group: { _id: "$genres", count: { $sum: 1 } } }
    ]);
}

async function findMoviesByDirector(directorName) {
    return Movie.find({ directors: directorName });
}

async function findMoviesReleasedInYear(year) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year + 1, 0, 1);
    return Movie.find({ released: { $gte: startDate, $lt: endDate } });
}

async function findMoviesWithRuntimeBetween(minRuntime, maxRuntime) {
    return Movie.find({ runtime: { $gte: minRuntime, $lte: maxRuntime } });
}

async function findDramaMoviesRatedR() {
    return Movie.find({ genres: "Drama", rated: "R" });
}

async function findMoviesReleasedInCountry(countryName) {
    return Movie.find({ countries: countryName });
}

async function findHighRatedMovies() {
    return Movie.find({ "imdb.rating": { $gt: 8 } });
}

async function findMovieWithMostComments() {
    return Movie.find().sort({ num_mflix_comments: -1 }).limit(1);
}

async function findMovieWithLowestRuntime() {
    return Movie.find().sort({ runtime: 1 }).limit(1);
}

async function storeAggregationResults() {
    await Movie.aggregate([
        { $group: { _id: "$rated", count: { $sum: 1 } } },
        { $out: "aggregated" } // Store the result in a new collection named "aggregated"
    ]);
    console.log('Aggregation results stored in "aggregated" collection');
}


        console.log('Movies released after 1900:', await findMoviesAfter1900());
        console.log('Movies with runtime less than 60 minutes:', await findMoviesRuntimeLessThan60());
        console.log('Rating counts:', await countMoviesByRating());
        console.log('Average runtime:', await findAverageRuntime());
        console.log('Total number of movies:', await countTotalMovies());
        console.log('Movies with more than 3 comments:', await findMoviesWithMoreThan3Comments());
        console.log('Genre counts:', await groupMoviesByGenreAndCount());
        console.log('Movies directed by Christopher Nolan:', await findMoviesByDirector("Christopher Nolan"));
        console.log('Movies released in 2020:', await findMoviesReleasedInYear(2020));
        console.log('Movies with runtime between 90 and 120 minutes:', await findMoviesWithRuntimeBetween(90, 120));
        console.log('Drama movies rated "R":', await findDramaMoviesRatedR());
        console.log('Movies released in USA:', await findMoviesReleasedInCountry("USA"));
        console.log('Movies with IMDb rating greater than 8:', await findHighRatedMovies());
        console.log('Movie with the highest number of comments:', await findMovieWithMostComments());
        console.log('Movie with the lowest runtime:', await findMovieWithLowestRuntime());
        await storeAggregationResults();
// finally {
//         // Close the database connection
//         await mongoose.connection.close();
//         console.log('Database connection closed');
//     }
// }

// Run the aggregations
runAggregations();