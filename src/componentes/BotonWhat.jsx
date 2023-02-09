import React from "react";

const BotonWhat = () => {
  const style = {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const iconStyle = {
    color: "white",
    fontSize: "50px",
  };
  return (
    <div style={style}>
      <a
        href="https://wa.me/573133299109?text=hola,Anny,¿tienes agenda para hoy?"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp" style={iconStyle}></i>
      </a>
    </div>
  );
};

export default BotonWhat;
