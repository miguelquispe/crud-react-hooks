import React, { useState } from "react";
import PropTypes from "prop-types";

const AddServiceForm = props => {
  const initialState = {
    id: null,
    name: "",
    description: "",
    category: ""
  };

  const [service, setService] = useState(initialState);

  const handleInputOnChange = event => {
    const { name, value } = event.target;

    setService({ ...service, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (!service.name || !service.description || !service.category) return;
    props.addService(service);
    setService(initialState);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">Agregar servicio</div>
      </div>
      <div className="card-body">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              className="form-input"
              name="name"
              type="text"
              value={service.name}
              onChange={handleInputOnChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Descripción</label>
            <input
              className="form-input"
              name="description"
              type="text"
              value={service.description}
              onChange={handleInputOnChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Categoría</label>
            <select
              name="category"
              value={service.category}
              className="form-select"
              onChange={handleInputOnChange}
              onBlur={handleInputOnChange}
            >
              <option value="">Seleccione</option>
              {props.categories.length > 0 &&
                props.categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddServiceForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  addService: PropTypes.func.isRequired
};

export default AddServiceForm;
