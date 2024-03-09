import DataFormatter from './DataFormatter';

class UniverseDataFormatter extends DataFormatter {
  formatData(rawData) {
    // Formatação
    const formatedJson = {
      "img": rawData[0].hdurl,
      "exp": rawData[0].explanation
    }

    return formatedJson;
  }
}

export default UniverseDataFormatter;
