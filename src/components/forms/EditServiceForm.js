import React, { useState, useEffect } from "react";

const EditServiceForm = props => {
  const [service, setService] = useState(props.currentService);

  useEffect(() => {
    setService(props.currentService);
  }, [props]);

  const handleInputOnChange = event => {
    const { name, value } = event.target;

    setService({ ...service, [name]: value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    props.updateService(service.id, service);
  };

  const handleCancelClick = () => {
    props.setEditing(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">Editar Servicio</div>
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
              className="form-select"
              value={service.category}
              onChange={handleInputOnChange}
              onBlur={handleInputOnChange}
            >
              <option>Seleccione</option>
              {props.categories.length > 0 &&
                props.categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Grabar</button>
            <button className="btn" onClick={handleCancelClick}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceForm;
