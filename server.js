const express = require('express');
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const path = require('path');



const app = express();

// console.log(process.env.API_KEY);
app.use(cors('*/*'))

// SERVE THE REACT APP FROM SERVER

app.use(express.static(path.join(__dirname, 'build')))

// ROUTES //
app.get('/get_movie/:movieString', async (req, res) => {
    console.log(req.params.movieString);

    // call API
    let apiResponse = await axios(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    const data = apiResponse.data;
    console.log(data);
    res.json(data);
});
// END ROUTES //

 



app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
});
