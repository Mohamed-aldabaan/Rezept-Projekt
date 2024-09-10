import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateRezept() {
  const { id } = useParams();
  const [rezept, setRezept] = useState({
    title: "",
    zutaten: [],
    anweisungen: [],
    kochzeit: 0,
  });
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${url}/api/${id}`)
      .then((res) => res.json())
      .then((data) => setRezept(data))
      .catch((err) => console.error("Error fetching the recipe:", err));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRezept((prevRezept) => ({
      ...prevRezept,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${url}/api/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rezept),
      });
      navigate(`/${id}`);
    } catch (err) {
      console.error("Error updating the recipe:", err);
    }
  };

  return (
    <div className="update-rezept">
      <h1>Update Rezept</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={rezept.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Zutaten:</label>
          <textarea
            name="zutaten"
            value={rezept.zutaten.join("\n")}
            onChange={(e) =>
              setRezept({ ...rezept, zutaten: e.target.value.split("\n") })
            }
          ></textarea>
        </div>
        <div>
          <label>Anweisungen:</label>
          <textarea
            name="anweisungen"
            value={rezept.anweisungen.join("\n")}
            onChange={(e) =>
              setRezept({ ...rezept, anweisungen: e.target.value.split("\n") })
            }
          ></textarea>
        </div>
        <div>
          <label>Kochzeit:</label>
          <input
            type="number"
            name="kochzeit"
            value={rezept.kochzeit}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update Rezept</button>
      </form>
    </div>
  );
}

export default UpdateRezept;
