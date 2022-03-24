const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b0590b4c210bd221f86bf3e057f822ae&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)

        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%`
                /*                 location: response.body.location.name + ', ' + response.body.location.region + ', ' + response.body.location.country,
                                weatherDescription: response.body.current.weather_descriptions[0],
                                temperature: response.body.current.temperature,
                                feelsLike: response.body.current.feelslike */

            )
        }

    })

}

module.exports = forecast