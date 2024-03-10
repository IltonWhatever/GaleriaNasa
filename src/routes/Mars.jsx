import React, { useState, useEffect } from 'react';
import Galery from "../components/Galery";
import { useApiKey } from '../util/ApiKeyContext';
import { NASADataProvider } from '../util/NASADataProvider';
import { LocalJSONDataProvider } from '../util/LocalJSONDataProvider';

function Mars() { 
  const apiKey = useApiKey();
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    if (apiKey) {
      setDataProvider(new NASADataProvider(apiKey, 'mars'));
    } else {
      // Exemplo de JSON local
      const jsonData = {
        "title": "Sample Title",
        "image": "sample.jpg",
        "explanation": "Sample explanation"
      };
      setDataProvider(new LocalJSONDataProvider(jsonData));
    }
  }, [apiKey]);

  return (
    <div>
      {dataProvider && <Galery dataProvider={dataProvider} />}
    </div>
  );
}

export default Mars;
