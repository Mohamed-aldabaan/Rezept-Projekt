import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AddRezept = () => {
  const [title, setTitle] = useState("");
  const [zutaten, setZutaten] = useState([""]); /////////////
  const [anweisungen, setAnweisungen] = useState([""]);
  const [kochzeit, setKochzeit] = useState(0);
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const addZutaten = () => {
    setZutaten([...zutaten, ""]);
  };

  const addAnweisungen = () => {
    setAnweisungen([...anweisungen, ""]);
  };

  // Funktion zum Einfügen einer Zutat
  const handleZutatChange = (index, value) => {
    const newZutaten = [...zutaten];
    newZutaten[index] = value;
    setZutaten(newZutaten);
  };

  // Funktion zum Einfügen einer Anweisung
  const handleAnweisungenChange = (index, value) => {
    const newAnweisungen = [...anweisungen];
    newAnweisungen[index] = value;
    setAnweisungen(newAnweisungen);
  };

  const handleRemoveZutat = (index) => {
    const newZutaten = [...zutaten];
    if (newZutaten.length > 1) {
      newZutaten.splice(index, 1);
    }
    setZutaten(newZutaten);
  };

  
  const handleRemoveAnweisung = (index) => {
    const newAnweisungen = [...anweisungen];
    if (newAnweisungen.length > 1) {
      newAnweisungen.splice(index, 1);
    }
    setAnweisungen(newAnweisungen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const neuRezept = { title, zutaten, anweisungen, kochzeit };
    await fetch(`${url}/api`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(neuRezept),
    });
    navigate("/");
  };

  return (
    <div className="addrezept">
      <NavLink to="/">Home</NavLink>
      <h1>Add Rezept</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label>Zutaten:</label>
          {zutaten.map((zutat, index) => (           
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <input
                  style={{ margin: ".7rem 0", flexGrow: 1 }}
                  type="text"
                  value={zutat}
                  onChange={(e) => handleZutatChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="form-löschen"
                  onClick={() => handleRemoveZutat(index)}
                >
                  -
                </button>
              </div>
            
          ))}
          <button
            type="button"
            onClick={addZutaten}
            style={{ marginBottom: "15px" }}
          >
            +
          </button>
        </div>
        <div className="" style={{ marginTop: "15px" }}>
          <label>Anweisungen:</label>
          {anweisungen.map((anweisung, index) => (
            <div key={index} className="">
              <textarea
                style={{ margin: ".7rem 0" }}
                type="text"
                name="anweisungen"
                value={anweisung}
                onChange={(e) => handleAnweisungenChange(index, e.target.value)}
                required
              />
              <button
                type="button"
                className="form-löschen"
                onClick={() => handleRemoveAnweisung(index)}
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addAnweisungen}
            style={{ marginBottom: "15px" }}
          >
            +
          </button>
        </div>

        <div className="">
          <label>Kochzeit:</label>
          <input
            type="text"
            name="kochzeit"
            value={kochzeit}
            onChange={(e) => setKochzeit(e.target.value)}
            required
          />
        </div>

        <button type="submit">Neuen Rezept hinzufügen</button>
      </form>
    </div>
  );
};

export default AddRezept;
