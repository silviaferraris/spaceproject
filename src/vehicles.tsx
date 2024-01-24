import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Vehicles: React.FC = () => {
  const [newVehicle, setNewVehicle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Vehicles.tsx

  const handleAddVehicle = async () => {
    try {
      const response = await fetch("url_del_tuo_backend/aggiungi_veicolo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vehicle: newVehicle }),
      });

      if (response.ok) {
        // Veicolo aggiunto con successo, aggiorna la lista dei veicoli e resetta lo stato
        setNewVehicle("");
        setErrorMessage("");
        // Aggiorna la lista dei veicoli o esegui un'azione per gestire l'aggiunta
      } else {
        // Il veicolo esiste già o si è verificato un altro errore, gestisci di conseguenza
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Si è verificato un errore.");
      }
    } catch (error) {
      console.error("Errore durante la chiamata al backend:", error);
      setErrorMessage(
        "Si è verificato un errore durante la comunicazione con il server."
      );
    }
  };

  return (
    <div className="vehicles-page">
      <Sidebar />
      <div className="main-content">
        <h1>Vehicles</h1>
        <div>
          <label htmlFor="newVehicle">New Vehicle:</label>
          <input
            type="text"
            id="newVehicle"
            value={newVehicle}
            onChange={(e) => setNewVehicle(e.target.value)}
          />
          <button onClick={handleAddVehicle}>Add</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Vehicles;
