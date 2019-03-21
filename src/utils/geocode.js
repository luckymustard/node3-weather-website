const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGFnaXJlMDgiLCJhIjoiY2p0ZTZ6a2piMGtucTQzcDc0MHF1bjRmZyJ9.Z0HxI8VsKMed4BG3rk4zuQ&limit=1'
    const proxy = 'http://cache.srv.pointwest.com.ph:3128'
    request ({url, json: true, proxy}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Services')
        } else {
            if (body.features.length === 0) {
                callback('Unable to find location')
            } else {
                callback(undefined, {
                    longitude: body.features[0].center[1],
                    latitude: body.features[0].center[0],
                    location: body.features[0].place_name}
                    )
            }
        }
    })
}

module.exports = geocode