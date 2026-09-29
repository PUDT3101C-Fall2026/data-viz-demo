// Import the functions I need for working with files
import { readFileSync, writeFileSync } from "fs";

// Read the JSON file into a string
let rawText = readFileSync("./RawJson.json", "utf-8");

// Turn the string of JSON text into an actual object
let rawData = JSON.parse(rawText);

// Now, create a new array of data
// First, make an empty array
let outputData = [];

// Then, loop through each element of the input array
for (let row of rawData) {
    // Pull the data I want out of the input and save a new object
    // in the output
    outputData.push({
        time: row.timestamp,
        direction: row.flowName,
        count: row.counts
    });
}

// Turn object into text again
let outputText = JSON.stringify(outputData, null, 2);

// Save that text into a new file in my site folder
writeFileSync("./data.json", outputText);