const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/d131f3bf22faf3ec2d3f83cfa003d4b6/' + long + ',' + lat

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (body.error) {
            callback('Invalid coordinates. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ` It is currently ${Math.round(body.currently.temperature)} degrees out, with a high of ${Math.round(body.daily.data[0].temperatureMax)} and a low of ${Math.round(body.daily.data[0].temperatureMin)}. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast