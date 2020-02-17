import React, { useState, useEffect } from "react";
import EditServiceForm from "./components/forms/EditServiceForm";
import NavBar from "./components/NavBar";
import ServicesList from "./components/services/ServicesList";
import AddServiceForm from "./components/forms/AddServiceForm";

const App = () => {
  // STATE
  const categories = ["Autos", "Hogar", "Salud"];

  // const initialServices = [];

  const initialServices = [
    {
      id: 1,
      name: "Electricidad",
      description: "Lorem ipsum dolor sit amet",
      category: "Hogar"
    },
    {
      id: 2,
      name: "Auxilio Mecanico",
      description: "Lorem ipsum dolor sit amet",
      category: "Autos"
    }
  ];

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    category: ""
  };

  // STATE
  const [services, setServices] = useState(initialServices);
  const [currentService, setCurrentService] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [filter, setFilter] = useState("all");

  // CRUD ACTIONS
  const addService = service => {
    service.id = services.length + 1;
    setServices([...services, service]);
  };

  const editService = service => {
    setEditing(true);
    setCurrentService({
      id: service.id,
      name: service.name,
      description: service.description,
      category: service.category
    });
  };

  const updateService = (id, updateService) => {
    setEditing(false);
    setServices(
      services.map(service => (service.id === id ? updateService : service))
    );
  };

  const deleteService = id => {
    setServices(services.filter(service => service.id !== id));
  };

  // Filter
  const filtered = category => {
    setFilter(category.toLocaleLowerCase());
  };

  // Effect: services change
  useEffect(() => {
    setFilter("all");
  }, [services]);

  // RENDER
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Servicios</h3>
        <NavBar categories={categories} filtered={filtered} />
        <div className="columns">
          <div className="column col-8">
            <ServicesList
              services={services}
              editService={editService}
              deleteService={deleteService}
              filter={filter}
            />
          </div>
          <div className="column col-4">
            {editing ? (
              <EditServiceForm
                categories={categories}
                currentService={currentService}
                updateService={updateService}
                setEditing={setEditing}
              />
            ) : (
              <AddServiceForm categories={categories} addService={addService} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
