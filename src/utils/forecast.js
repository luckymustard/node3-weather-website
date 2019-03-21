const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d203d84fda18f4d2257ef5c0bfbf5586/' + longitude + ',' + latitude 
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service')            
        } else {
            if (body.error) {
                callback('Can not find location')
            } else {
                callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
            }
        }
    })
}

module.exports = forecast