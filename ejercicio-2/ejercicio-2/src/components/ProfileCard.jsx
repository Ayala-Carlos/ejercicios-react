import React from 'react';

const ProfileCard = (props) => {
  return (
    <div className="card shadow" style={{ width: '22rem' }}>
      <div className="card-header bg-primary text-white text-center">
        <h4>Perfil de Usuario</h4>
      </div>
      <div className="card-body text-center">
        {/* Aquí usamos las props */}
        <h5 className="card-title text-uppercase fw-bold">{props.nombre}</h5>
        <hr />
        <p className="card-text text-start">
          <strong>Edad:</strong> {props.edad} años <br />
          <strong>Profesión:</strong> {props.profesion} <br />
          <strong>Ciudad:</strong> {props.ciudad}
        </p>
        <button className="btn btn-outline-primary btn-sm w-100">Contactar</button>
      </div>
    </div>
  );
};

export default ProfileCard;