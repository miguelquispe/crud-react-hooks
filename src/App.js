import React, { useState } from "react";
import EditServiceForm from "./components/forms/EditServiceForm";
import NavBar from "./components/NavBar";
import ServicesList from "./components/services/ServicesList";
import AddServiceForm from "./components/forms/AddServiceForm";

const App = () => {
  // STATE
  const categories = ["Autos", "Hogar", "Salud"];

  const servicesData = [
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
  const [services, setServices] = useState(servicesData);
  const [currentService, setCurrentService] = useState(initialFormState);

  // CRUD ACTIONS
  const addService = service => {
    service.id = services.length + 1;
    setServices([...services, service]);
  };

  const editService = service => {
    setCurrentService({
      id: service.id,
      name: service.name,
      description: service.description,
      category: service.category
    });
  };

  const updateService = (id, updateService) => {
    setServices(
      services.map(service => (service.id === id ? updateService : service))
    );
    setCurrentService(initialFormState);
  };

  const deleteService = id => {
    setServices(services.filter(service => service.id !== id));
  };

  // RENDER
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Servicios</h3>
        <NavBar />
        <div className="columns">
          <div className="column col-8">
            <ServicesList
              services={services}
              editService={editService}
              deleteService={deleteService}
            />
          </div>
          <div className="column col-4">
            {/* <EditServiceForm
              categories={categories}
              currentService={currentService}
              updateService={updateService}
            /> */}

            <AddServiceForm categories={categories} addService={addService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
