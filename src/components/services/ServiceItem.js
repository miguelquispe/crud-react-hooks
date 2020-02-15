import React from "react";
import PropTypes from "prop-types";

const ServiceItem = props => {
  const { id, name, description, category } = props.service;

  const handleClickEdit = id => {
    // alert(id);
  };

  const handleClickDelete = id => {
    props.deleteService(id);
  };

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
          <button className="btn btn-link" onClick={() => handleClickEdit(id)}>
            Editar
          </button>
          <button
            className="btn btn-link"
            onClick={() => handleClickDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired
};

export default ServiceItem;
