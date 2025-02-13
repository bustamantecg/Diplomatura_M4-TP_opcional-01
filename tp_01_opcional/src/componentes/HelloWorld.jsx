import React from "react";

const HelloWorld = () => {
    const estilo = {
      color: 'blue', // color del texto
      fontSize: '24px', // tamaño de la fuente
      textAlign: 'center', // Centrar el texto
      marginTop: '5px' // Añade un margen superior
    };
  
    return (
      <h1 style={estilo}>¡Hola, Mundo!</h1>
    );
  };
  
  export default HelloWorld;