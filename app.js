const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = 3000;
app.use(cors());
app.get("/", async (req, res) => {
  const api = async () => {
    await axios
      .get(
        "https://api.coinmarketcap.com/dexer/v3/dexer/pair-list?base-address=0xe2161b01c79c3ca2079c1ba8d0fd6423fc726b67&start=1&limit=10&platform-id=14"
      )
      .then((response) => {
        console.log(response.data.data[0].priceUsd, "my api callll");
        const price = response.data.data[0].priceUsd;
        console.log(price, "final price");
        return res.status(200).send(price);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  api();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
