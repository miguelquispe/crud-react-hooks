import React, { useState } from "react";
import EditServiceForm from "./components/forms/EditServiceForm";
import NavBar from "./components/NavBar";
import ServicesList from "./components/services/ServicesList";
import AddServiceForm from "./components/forms/AddServiceForm";

const App = () => {
  // DATA
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

  // HOOKS
  const [services, setServices] = useState(servicesData);

  // CRUD ACTIONS
  const editService = id => {
    console.log("edit service");
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
            <ServicesList services={services} deleteService={deleteService} />
          </div>
          <div className="column col-4">
            <EditServiceForm categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
