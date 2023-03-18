/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateDomainName() {
  const pronouns = ["the", "our", "your"];
  const adjectives = ["first", "second", "third", "fourth", "fifth"];
  const nouns = ["hub", "center", "capitol", "centre", "core"];
  const extensions = [".us", ".com", ".net", ".us", ".io"];

  const pronoun = getRandomElement(pronouns);
  const adjective = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const extension = getRandomElement(extensions);

  return pronoun + adjective + noun + extension;
}

for (let i = 0; i < 25; i++) {
  console.log(generateDomainName());
}
