// Galery.jsx
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import "../css/galery.css";
import React, { useState, useEffect } from "react";

function Galery({ dataProvider }) {
  console.log("Chegou "+ JSON.stringify(dataProvider))
  const [displayImage, setDisplayImage] = useState(null);
  const [carrocel, setCarrocel] = useState([]);
  const [indice, setIndice] = useState(0);

  const addCarrocel = async () => {
    try {
      // Coletando dados da API com base na função recebida.
      const rawData = await dataProvider.fetchData();
      // Formatando dados brutos com base na função recebida.
      const formattedData = await dataProvider.formatData(rawData);

      // Adicionando a Lista do Carrocel.
      setCarrocel(prevCarrocel => [...prevCarrocel, formattedData]);
      setDisplayImage(formattedData.hdurl);
    } catch (error) {
      console.error('Erro ao adicionar ao carrossel:', error);
    }
  };

  const moveInCarrocel = async (routeType, direction) => {
    if (carrocel) {
      await addCarrocel();
    } else if (direction === 'right') {
      if (carrocel.length === 0) {
        await addCarrocel();
      }
    }
  }

  useEffect(() => {
    console.log(carrocel)
  }, [carrocel]);

  return (
    <div className="master">
      <div className="center">
        <BsArrowLeftSquareFill className="buttonLeft" onClick={() => moveInCarrocel('teste', 'left')} />
        <div className="display">
          <img src={displayImage} className="imageDisplay" alt="displayed" />
        </div>
        <BsArrowRightSquareFill className="buttonRight" onClick={() => moveInCarrocel('teste', 'right')} />
      </div>
    </div>
  );
}

export default Galery;
