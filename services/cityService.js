import axios from 'axios'

/* https://us1.locationiq.com/v1/search.php?
   key=579da8611ad276&city=barbacena&format=json 
*/


class CityService {

  static async getCity(city) {
    return new Promise((resolve) => {
      axios.get(`https://us1.locationiq.com/v1/search.php?
        key=579da8611ad276
        &q=${city}&format=json `)
      .then(res => {
        const data = res.data[0];
        resolve(data);
      })
      .catch(error => {
        console.log(error);
        resolve(null);
      });
    })
  }
}

export default CityService;