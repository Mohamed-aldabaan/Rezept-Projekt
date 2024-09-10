import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ConfirmModal from "../components/ConfirmModal";

function RezeptDetails() {
  const { id } = useParams();
  const [rezept, setRezept] = useState({}); // versuche verschiedene werte
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;
  console.log(url);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Fetching data from:", `${url}/api/${id}`);

    fetch(`${url}/api/${id}`)
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setRezept(data);
      })
      .catch((err) => {
        console.error("Error fetching the recipe:", err);
      });
  }, [id]);

  const handleButton = async () => {
    navigate("/");
  };
  const handleDelete = async () => {
    try {
      await fetch(`${url}/api/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <div className="rezeptdetail">
      <div>
        <div className="item-img">Foto</div>
        <div className="item-detail">
          <h3>{rezept.title}</h3>
          <p>Kochzeit: {rezept.kochzeit} min</p>
        </div>

        <div>
          {" "}
          Zutaten:
          {rezept.zutaten &&
            rezept.zutaten.map((zutat, index) => (
              <li
                key={index}
                style={{ backgroundColor: "#616a738c", padding: "1rem 2rem" }}
              >
                {zutat}
              </li>
            ))}
        </div>
        <p>
          Anweisungen:
          {rezept.anweisungen &&
            rezept.anweisungen.map((anweisung, index) => (
              <li
                key={index}
                style={{ backgroundColor: "#616a738c", padding: "1rem 2rem" }}
              >
                {anweisung}
              </li>
            ))}
        </p>
        <p>{rezept.erstellungsdatum}</p>
      </div>
      <div className="buttondetail">
      <button onClick={handleButton}>go back</button>
      <button onClick={() => {
    navigate(`/update/${id}`);
  }}>update</button>
      <button onClick={openModal}>Delete</button>
      </div>
      {isModalOpen && (
        <ConfirmModal confirm={handleDelete} cancel={closeModal} />
      )}
    </div>
  );
}

export default RezeptDetails;
