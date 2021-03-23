fetch("http://localhost:3001/games")
  .then((res) => res.json())
  .then((res) => console.log(res));
