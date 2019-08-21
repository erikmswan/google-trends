const trends = require('google-trends-api');
const argv = require('yargs').argv;
const fs = require('fs');

console.log('argv', argv);

// Possible args:
// --all
// --related-queries
// --related-topics
// --daily-trends
// --interest-over-time
// --interest-by-region

const keyword = argv._[0];
const startTime = new Date('2018-01-01');
const doAll = argv.all === true;

if (argv['related-queries'] === true || doAll) {
  trends.relatedQueries({
    keyword,
    startTime,
    geo: 'US'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFileSync('related-queries.json', result, err => {
      if (err) console.log(err);
    })
  });
}

if (argv['related-topics'] === true || doAll) {
  trends.relatedTopics({
    keyword,
    startTime,
    geo: 'US'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFileSync('related-topics.json', result, err => {
      if (err) console.log(err);
    })
  });
}

if (argv['daily-trends'] === true || doAll) {
  trends.dailyTrends({
    geo: 'US'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFileSync('daily-trends.json', result, err => {
      if (err) console.log(err);
    })
  });
}

if (argv['interest-over-time'] === true || doAll) {
  trends.interestOverTime({
    keyword,
    startTime,
    // geo: 'US-OR'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFileSync('interest-over-time.json', result, err => {
      if (err) console.log(err);
    })
  })
}

if (argv['interest-by-region'] === true || doAll) {
  trends.interestByRegion({
    keyword,
    startTime,
    geo: 'US',
    resolution: 'CITY'
  }, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.writeFileSync('interest-by-region.json', result, err => {
      if (err) console.log(err);
    })
  });
}


// relatedQueries
// relatedTopics
// dailyTrends
// interestOverTime
// interestByRegion
// realTimeTrends
