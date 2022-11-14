import React from "react";

export default function Header() {
  const [showButton, setShowButton] = React.useState(false);

  const mostrarBoton = () => {
    setShowButton(!showButton);
  };

  const salir = () => {
    window.location.href = "http://localhost:5500/index.html";
  };
  return (
    <div className="header">
      <div className="boton-header" onClick={mostrarBoton}>
        RRHH
      </div>
      {showButton && (
        <button className="boton-salida" onClick={salir}>
          Salir
        </button>
      )}
    </div>
  );
}
