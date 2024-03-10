import DataFormatter from "./DataFormatter";

class EarthDataFormatter extends DataFormatter {
  constructor(apiKey, route) {
    super();
    this.apiKey = apiKey;
    this.route = route;
  }

  async formatData(rawData) {
    console.log("Foi feito Request Universe");

    try {
      // Formatando os dados recebidos da API
      const formattedData = [];
      for (const item of rawData) {
        const date = item.date;
        const image = item.image;
        const parts = date.split(" ");
        const datePart = parts[0];
        const [ano, mes, dia] = datePart.split("-");

        const url = `https://api.nasa.gov/EPIC/archive/natural/${ano}/${mes}/${dia}/png/${image}.png?api_key=beE7rfgIRpayhem3m8Ua7sKqSlvpgGDuPYie63iJ`; // Adiciona o valor de 'date' à URL da requisição
        const response = await fetch(url); // Espera a resposta da requisição

        formattedData.push({
          img: response.url,
          exp: date,
          tit: item.caption,
          dat: date,
        });
      }

      return formattedData;
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      return ["Deu ruim"]; // Retorna um array vazio em caso de erro
    }
  }
}

export default EarthDataFormatter;
