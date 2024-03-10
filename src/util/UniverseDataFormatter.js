import DataFormatter from './DataFormatter';

class UniverseDataFormatter extends DataFormatter {
  formatData(rawData) {
    console.log('Foi feito Request Universe');

    return rawData.map(item =>({
      img: item.hdurl,
      exp: item.explanation,
      tit: item.title,
      dat: item.date
    }));
  }
}

export default UniverseDataFormatter;
