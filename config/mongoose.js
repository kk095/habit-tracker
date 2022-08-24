const express = require("express");
const mongoose = require("mongoose");
const ENV = require("../environment.js");

main()
  .then(() => {
    console.log("mongoose is working");
  })
  .catch((err) => console.log(err));

async function main() {
  // CONNECTING MONGOOSE TO  OUR MONGODB DATABASE
  await mongoose.connect(
    "mongodb+srv://kk095:Krishankant$095@cluster0.hoemh3q.mongodb.net/habitsTracker"
  );
}
