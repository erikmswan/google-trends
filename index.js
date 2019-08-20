const trends = require('google-trends-api');
const fs = require('fs');

trends.relatedQueries({
  keyword: 'climate change',
  startTime: new Date('2018-01-01')
}, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFileSync('output.json', result, err => {
    if (err) console.log(err);
  })
});
