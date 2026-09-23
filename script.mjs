import { readFileSync, writeFileSync } from "fs";

let rawText = readFileSync("./RawJson.json", "utf-8");

let rawData = JSON.parse(rawText);

let outputData = [];

for (let row of rawData) {
    outputData.push({
        time: row.timestamp,
        direction: row.flowName,
        count: row.counts
    });
}

writeFileSync("./ProcessedJson.json", JSON.stringify(outputData));