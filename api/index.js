const express = require('express');
const router = express.Router();
const Joke = require("./jokesModel")

// Mock joke data
// const jokes = [
//   { id: 1, joke: 'Why don’t scientists trust atoms? Because they make up everything!' },
//   { id: 2, joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' }
// ];

// // GET /jokes - Get all jokes
// router.get('/', (req, res) => {
//   res.json(jokes);
// });

// // GET /jokes/:id - Get a specific joke
// router.get('/:id', (req, res) => {
//   const joke = jokes.find(j => j.id === parseInt(req.params.id));
//   if (joke) {
//     res.json(joke);
//   } else {
//     res.status(404).send('Joke not found');
//   }
// });
router.delete("/:id", async (req, res) => {
  const id = req.params.id
  const delJoke = await Joke.deleteJoke(id)
  res.status(200).json(delJoke)
})
module.exports = router;
