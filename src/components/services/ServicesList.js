import React from "react";
import ServiceItem from "./ServiceItem";

const ServicesList = props => {
  return (
    <div className="columns">
      {props.services.length > 0 ? (
        props.services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))
      ) : (
        <div className="empty">
          <p className="empty-title">No se encontraron servicios</p>
          <div className="empty-action">
            <button className="btn btn-primary">Agregar servicio</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesList;
