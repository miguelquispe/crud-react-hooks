import React from "react";
import ServiceItem from "./ServiceItem";

const ServicesList = props => {
  const editService = service => {
    props.editService(service);
  };
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
            editService={editService}
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
