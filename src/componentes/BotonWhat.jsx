import React from "react";
import "../Styles/whatsapp.css";

const BotonWhat = () => {
  return (
    <div className="styleWhat">
      <a
        href="https://wa.me/573133299109?text=hola,Anny,¿tienes agenda para hoy?"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp iconStyle"></i>
        <span class="message-porLeer">1</span>
      </a>
    </div>
  );
};

export default BotonWhat;
