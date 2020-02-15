import React from "react";
import ServiceItem from "./ServiceItem";

const ServicesList = props => {
  const deleteService = id => {
    props.deleteService(id);
  };

  return (
    <div className="columns">
      {props.services.length > 0 ? (
        props.services.map(service => (
          <ServiceItem
            key={service.id}
            service={service}
            deleteService={deleteService}
          />
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
