import { useState } from "react";
import "../css/home.css";

const Home = () => {
  const [visibleDivAPOD, setVisibleDivAPOD] = useState(false);
  const [visibleDivEPIC, setVisibleDivEPIC] = useState(false);
  const [visibleDivHOVER, setVisibleDivHOVER] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleDiv = (div) => {
    switch (div) {
      case "APOD":
        setVisibleDivAPOD(!visibleDivAPOD);
        break;
      case "EPIC":
        setVisibleDivEPIC(!visibleDivEPIC);
        break;
      case "HOVER":
        setVisibleDivHOVER(!visibleDivHOVER);
        break;
      default:
        break;
    }
    setIsBlurred(false);
  };

  const handleDiv = (div) => {
    toggleDiv(div);
    setIsBlurred(true);
  };

  return (
    <>
      <div className={`home-container ${isBlurred ? "blurred" : ""}`}>
        <div className="master">
          <div className="title">
            {" "}
            Bem vindo a Implementação das API's da{" "}
            <span className="nasa">NASA</span>
          </div>
          <img src="/NASA_logo.svg.png" alt="" />
          <div className="apis" onClick={() => handleDiv("APOD")}>
            APOD: Astronomy Picture of the Day
          </div>
          <div className="apis" onClick={() => handleDiv("EPIC")}>
            EPIC: Earth Polychromatic Imaging Camera
          </div>
          <div className="apis" onClick={() => handleDiv("HOVER")}>
            Mars Rover: Earth Image data gathered by NASA's Curiosity,
            Opportunity, and Spirit rovers on Mars
          </div>
        </div>
      </div>
      {visibleDivAPOD && (
        <div className="overlay" onClick={() => toggleDiv("APOD")}>
          Um dos sites mais populares da NASA é o Astronomy Picture of the Day.
          Na verdade, este site é um dos sites mais populares em todas as
          agências federais. Tem o apelo popular de um vídeo de Justin Bieber.
          Este endpoint estrutura o APOD imagens e metadados associados para que
          possam ser reaproveitados para outras aplicações. Além disso, se o
          parâmetro concept_tags estiver definido como True, então as
          palavras-chave derivadas de a explicação da imagem é retornada. Essas
          palavras-chave podem ser usadas como geradas automaticamente hashtags
          para feeds do Twitter ou Instagram; mas geralmente ajudam na
          descoberta de imagens relevantes.
        </div>
      )}
      {visibleDivEPIC && (
        <div className="overlay" onClick={() => toggleDiv("EPIC")}>
          A API EPIC fornece informações sobre as imagens diárias coletadas pelo
          instrumento Earth Polychromatic Imaging Camera (EPIC) da DSCOVR.
          Posicionado exclusivamente no ponto Lagrange Terra-Sol, o EPIC fornece
          imagens de disco completo da Terra e captura perspectivas únicas de
          certos eventos astronômicos, como trânsitos lunares, usando um
          detector CCD (Charge Coupled Device) de 2048x2048 pixels acoplado a um
          telescópio Cassegrain de 30 cm de abertura. .
        </div>
      )}
      {visibleDivHOVER && (
        <div className="overlay" onClick={() => toggleDiv("HOVER")}>
          Esta API foi projetada para coletar dados de imagens coletados pelos
          rovers Curiosity, Opportunity e Spirit da NASA em Marte e torná-los
          mais facilmente disponíveis para outros desenvolvedores, educadores e
          cientistas cidadãos. Esta API é mantida por Chris Cerami. Cada rover
          possui seu próprio conjunto de fotos armazenadas no banco de dados,
          que podem ser consultadas separadamente. Existem várias consultas
          possíveis que podem ser feitas na API. As fotos são organizadas pelo
          sol (rotação ou dia marciano) em que foram tiradas, contando a partir
          da data de pouso do rover. Uma foto tirada no milésimo sol marciano do
          Curiosity explorando Marte, por exemplo, terá um atributo sol de 1000.
          Se preferir pesquisar pela data da Terra em que a foto foi tirada,
          você também pode fazer isso.
        </div>
      )}
    </>
  );
};

export default Home;
