import DataFormatter from './DataFormatter';

class UniverseDataFormatter extends DataFormatter {
  formatData(rawData) {
    // Formatação
    // const formatedJson = {
    //   "img": rawData[0].hdurl,
    //   "exp": rawData[0].explanation
    // }
    console.log('Foi feito Request');

    return rawData.map(item =>({
      img: item.hdurl,
      exp: item.explanation,
      tit: item.title,
      dat: item.date
    }));
  }
}

export default UniverseDataFormatter;
