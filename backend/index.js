const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const port = 4000;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.get("/api/allCountries", cors(corsOptions), async (req, res) => {
  const countriesResponse = await axios.get("https://restcountries.com/v2/all");
  console.log(req);
  if (countriesResponse.status === 200) {
    res.status(200).send({ data: countriesResponse.data, success: true });
  }

  if (countriesResponse.status >= 400) {
    res.status(200).send({
      data: [],
      success: false,
      message: "Countries API server is not available",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
