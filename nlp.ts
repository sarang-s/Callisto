const url: string =
  "https://gateway-lon.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2019-07-12";
const searchURL: string =
  "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&limit=1&format=json&search=";
const pageURL: string = "https://en.wikipedia.org/wiki/";

import apiKey from './config.ts'

export default async function analyze(term: string) {
  let u;
  try {
    let resp = await fetch(searchURL + term);
    let data = await resp.json();
    let title = data[1][0];
    u = pageURL + title;
  } catch (err) {
    throw new Error("Oops! Fetching Wikipedia URL failed.");
  }
  const parameters = {
    "url": u,
    "features": {
      "semantic_roles": {
        "entities": true
      }
    },
    "return_analyzed_text": true
  };
  let data = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization":
        `Basic ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(parameters)
  });
  return await data.json();
}
