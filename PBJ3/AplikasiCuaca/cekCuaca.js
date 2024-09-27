const request = require('postman-request');

const urlCuaca = 'https://api.weatherstack.com/current?access_key=d180bc87837bf82fcca49694c43f27d1&query=-0.8970976665111023,100.35070068211002&units=m';

request({ url: urlCuaca, json: true }, (error, response) => {
  if (error) {
    console.log('Tidak bisa terhubung ke layanan cuaca!');
  } else if (response.body.error) {
    console.log('Lokasi tidak ditemukan!');
  } else {
    console.log(
      'Saat ini suhu di luar mencapai ' +
      response.body.current.temperature +
      ' derajat Celcius. Kemungkinan terjadinya hujan adalah ' +
      response.body.current.precip +
      '%. Cuaca saat ini: ' +
      response.body.current.weather_descriptions[0] // Mengakses elemen pertama array weather_descriptions
    );
  }
});
