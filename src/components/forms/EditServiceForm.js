import React from "react";

const EditServiceForm = props => {
  const handleInputOnChange = () => {};

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">Servicio</div>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              className="form-input"
              name="name"
              type="text"
              value=""
              onChange={handleInputOnChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Descripción</label>
            <input
              className="form-input"
              name="description"
              type="text"
              value=""
              onChange={handleInputOnChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Categoría</label>
            <select className="form-select" onChange={handleInputOnChange}>
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
            <button className="btn">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditServiceForm;
