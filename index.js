const axios = require('axios');
const xml2js = require('xml2js');

const fetchFeed = async (url) => {
    try {
        const response = await axios.get(url);
        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(response.data, (err, result) => {
            console.log(result.rss.channel.item); // Adjust this based on the structure of the feed
        });
    } catch (error) {
        console.error('Error fetching feed:', error);
    }
};

fetchFeed('https://feed.infoq.com/');
