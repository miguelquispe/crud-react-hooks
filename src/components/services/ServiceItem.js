import React from "react";

const ServiceItem = props => {
  const { name, description, category } = props.service;
  return (
    <div className="column col-4">
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{name}</div>
        </div>
        <div className="card-body">
          <p>{description}</p>
          <p>
            <span className="label label-secondary">{category}</span>
          </p>
        </div>
        <div className="card-footer">
          <a href="#1" className="btn btn-link">
            Editar
          </a>
          <a href="#2" className="btn btn-link">
            Eliminar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
