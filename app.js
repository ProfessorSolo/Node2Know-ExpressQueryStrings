"use strict";

/**
 * Node2Know — Express Query Strings
 *
 * Query strings are the “options panel” for a route.
 * They do NOT change the route path — they modify the request.
 *
 * Example:
 *   /search?keyword=turbo&sort=desc
 *
 * In Express, query string key/values land in:
 *   req.query
 */

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/search", (req, res) => {
  const { keyword, sort } = req.query;

  // req.query = { keyword: 'turbo', sort: 'desc' }

  if (!keyword) {
    return res.send("Please specify a keyword.");
  }

  res.send(`Searching for ${keyword} sorted by ${sort}`);
});

app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Try: http://localhost:${PORT}/search?keyword=turbo&sort=desc`);
  console.log(`Try: http://localhost:${PORT}/search?keyword=turbo`);
  console.log(`Try: http://localhost:${PORT}/search`);
});
