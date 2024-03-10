import DataFormatter from './DataFormatter';

class MarsDataFormatter extends DataFormatter {
  formatData(rawData) {
    console.log('Foi feita Request Mars');
    // Formatação
      
    return rawData.photos.map(item =>({
      img: item.img_src,
      exp: "Data de Pouso " + item.rover.landing_date,
      tit: "Data na Terra "+item.earth_date,
      dat: item.earth_date
    }));
  }
}

export default MarsDataFormatter;
