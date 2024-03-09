// Galery.jsx
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import "../css/galery.css";
import React, { useState, useEffect } from "react";

function Galery({ dataProvider }) {
  const [displayImage, setDisplayImage] = useState('../../public/default.jpg');
  const [informations, setInformations] = useState(" ");
  const [carrocel, setCarrocel] = useState([{img:null, exp: null}]);
  const [indice, setIndice] = useState(0);

  const addCarrocel = async () => {
    try {
      // Coletando dados da API com base na função recebida.
      const rawData = await dataProvider.fetchData();
      // Formatando dados brutos com base na função recebida.
      const formattedData = await dataProvider.formatData(rawData);

      // Adicionando a Lista do Carrocel.
      setCarrocel(prevCarrocel => [...prevCarrocel, formattedData]);
      await setDisplayImage(formattedData.img);
      setInformations(formattedData.exp);
    } catch (error) {
      console.error('Erro ao adicionar ao carrossel:', error);
    }
  };

  const moveInCarrocel = async (routeType, direction) => {
    switch(carrocel.length){
      case (carrocel.length === 1):{
        await addCarrocel();
        setIndice(prevIndice => prevIndice + 1);
        break;}
    }

    if (carrocel) {
      await addCarrocel();
    } else if (direction === 'right') {
      if (carrocel.length === 0) {
        await addCarrocel();
        setIndice(prevIndice => prevIndice + 1)
      }
    }
  }

  return (
    <div className="master">
      <div className="center">
        <BsArrowLeftSquareFill className="buttonLeft" onClick={() => moveInCarrocel('teste', 'left')} />
        <div className="display">
          <img src={displayImage} className="imageDisplay" alt="displayed" />
        </div>
        <BsArrowRightSquareFill className="buttonRight" onClick={() => moveInCarrocel('teste', 'right')} />
      </div>
      <div className="informations">
        <p className="textInformations">{informations}</p>
      </div>
    </div>
  );
}

export default Galery;
