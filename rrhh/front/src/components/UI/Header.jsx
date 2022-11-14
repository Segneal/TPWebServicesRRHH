import React from "react";

export default function Header() {
  const [showButton, setShowButton] = React.useState(false);

  const mostrarBoton = () => {
    setShowButton(!showButton);
  };

  return (
    <div className="header">
      <div className="boton-header" onClick={mostrarBoton}>
        RRHH
      </div>
      {showButton && <button className="boton-salida">Salir</button>}
    </div>
  );
}
