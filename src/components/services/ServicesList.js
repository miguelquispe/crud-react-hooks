import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ServiceItem from "./ServiceItem";

const ServicesList = props => {
  const [items, setItems] = useState([]);

  // Filter Items
  useEffect(() => {
    const { services, filter } = props;
    let showItems = services;
    if (filter !== "all" && filter.indexOf()) {
      showItems = services.filter(
        service => service.category.toLowerCase() === filter
      );
    }
    setItems(showItems);
  }, [props]);

  // Edit service
  const editService = service => {
    props.editService(service);
  };

  // Delete service
  const deleteService = id => {
    props.deleteService(id);
  };

  return (
    <div className="columns">
      {items.length > 0 ? (
        items.map(service => (
          <ServiceItem
            key={service.id}
            service={service}
            editService={editService}
            deleteService={deleteService}
          />
        ))
      ) : (
        <div className="column col-12">
          <div className="empty">
            <p className="empty-title">No se encontraron servicios</p>
          </div>
        </div>
      )}
    </div>
  );
};

ServicesList.propTypes = {
  filter: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  editService: PropTypes.func.isRequired,
  deleteService: PropTypes.func.isRequired
};

export default ServicesList;
