import { DataProvider } from './DataProvider';
import DataFormatter from './DataFormatter';
import UniverseDataFormatter from './UniverseDataFormatter';
import EarthDataFormatter from './EarthDataFormatter';
import MarsDataFormatter from './MarsDataFormatter';

class NASADataProvider extends DataProvider {
  //   Construtor recebe a chave da api
  // rota para identificação dos meus if

  constructor(apiKey, route) {
    super();
    this.apiKey = apiKey;
    this.route = route;
  }

  async fetchData() {
    let response;
    switch(this.route){
      case 'universe':
        response = await fetch(`https://api.nasa.gov/planetary/apod?count=25&api_key=${this.apiKey}`);
        break;
      case 'mars':
        response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.apiKey}&page=${Math.floor(Math.random()*13)}`);
        break;
      case 'earth':
        response = await fetch(`https://api.nasa.gov/EPIC/api/natural?api_key=${this.apiKey}`);
        break;
      default:
        response = 'Rota Invalida';
    }
    return response.json();
  }

  async formatData(rawData) {
    let formatter;
    switch (this.route) {
      case 'universe':
        formatter = new UniverseDataFormatter();
        break;
      case 'earth':
        formatter = new EarthDataFormatter();
        break;
      case 'mars':
        formatter = new MarsDataFormatter();
        break;
      default:
        throw new Error('Invalid route');
    }

    return formatter.formatData(rawData);
  }
}

export {NASADataProvider};