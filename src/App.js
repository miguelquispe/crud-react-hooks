import React, { useState } from "react";
import EditForm from "./components/forms/EditForm";
import NavBar from "./components/NavBar";
import ServicesList from "./components/services/ServicesList";

const App = () => {
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

  const [services, setServices] = useState(servicesData);

  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Servicios</h3>
        <NavBar />
        <div className="columns">
          <div className="column col-8">
            <ServicesList services={services} />
          </div>
          <div className="column col-4">
            <EditForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
