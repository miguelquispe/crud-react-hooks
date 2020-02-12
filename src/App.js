import React from "react";
import EditForm from "./components/EditForm";
import NavBar from "./components/NavBar";
import Service from "./components/ServiceItem";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h3 className="text-center">Servicios</h3>
        <NavBar />
        <div className="columns">
          <div className="column col-8">
            <Service />
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
