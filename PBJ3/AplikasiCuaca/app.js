const request = require('postman-request')
const url ='https://api.weatherstack.com/current?access_key=d180bc87837bf82fcca49694c43f27d1&query=-0.8970976665111023,100.35070068211002'
request({ url: url }, (error, response) => {
// console.log(response)
 const data = JSON.parse(response.body)
// console.log(data)
// console.log(data.current)
 console.log(data.current.temperature)
})