import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import "../css/galery.css";
import React, { useState, useEffect } from "react";

function Galery({ dataProvider }) {
  // Imagem da Galeria.
  const [displayImage, setDisplayImage] = useState('/default.jpg');
  // Informações abaixo da galeria.
  const [currentInformation, setCurrentInformation] = useState("");
  // Informação do Titulo.
  const [title, setTitle] = useState('Nasa Galery');
  // Variavel onde fica o buff dos requests.
  const [carrocel, setCarrocel] = useState([]);
  // Variavel de indice para saber onde esta nas imagens do carrocel.
  const [indice, setIndice] = useState(0);


  useEffect(() => {
    addCarrocel(); // Carregar as primeiras imagens ao montar o componente
  }, []);

  const addCarrocel = async () => {
    try {
      // Coletando dados da API com base na função recebida.
      const rawData = await dataProvider.fetchData();

      // Formatando dados brutos com base na função recebida.
      const formattedData = await dataProvider.formatData(rawData);

      // Adicionando item a item da coleção Json para o Carrocel
      formattedData.forEach((item) => {
        setCarrocel((prevCarrocel) => [...prevCarrocel, item]);
      });

      // Alterando a Imagem.
      await setDisplayImage(formattedData.img);
      // Alterando o texto de informação.
      await setCurrentInformation(formattedData.exp);
      // Alterando o Titulo.
      await setTitle(formattedData.title);


    } catch (error) {
      console.error('Erro ao adicionar ao carrossel:', error);
    }
  };

  const goToNextSlide = () => {
    if (indice === carrocel.length - 1) {
      addCarrocel();
      setIndice(indice + 1); // Avança para o próximo slide
    } else {
      setIndice((prevIndex) => prevIndex + 1);
    }
  };
  
  const goToPrevSlide = () => {
    setIndice((prevIndex) =>
      prevIndex === 0 ? carrocel.length - 1 : prevIndex - 1
    );
  };  
  
  // Responsavel por atualizar tudo com base no carrocel e indice.
  useEffect(() => {
    setCurrentInformation(carrocel[indice]?.exp || "");
    setTitle(carrocel[indice]?.tit || "");
  }, [indice, carrocel]);

  return (
    <div className="master">
      <div className="title">{title}</div>
      <div className="center">
        <BsArrowLeftSquareFill className="buttonLeft" onClick={() => goToPrevSlide()} />
        <div className="display">
          <img src={carrocel[indice]?.img || '/default.jpg'} className="imageDisplay" alt="displayed" />
        </div>
        <BsArrowRightSquareFill className="buttonRight" onClick={() => goToNextSlide()} />
      </div>
      <div className="informations">
        <p className="textInformations">{currentInformation}</p>
      </div>
    </div>
  );
}

export default Galery;
