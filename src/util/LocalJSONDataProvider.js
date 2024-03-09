// LocalJSONDataProvider.js
import { DataProvider } from "./DataProvider";

class LocalJSONDataProvider extends DataProvider {
  constructor(jsonData) {
    super();
    this.jsonData = jsonData;
  }

  async fetchData() {
    return this.jsonData;
  }

  async formatData() {
    return this.jsonData;
  }
}

export { LocalJSONDataProvider };
