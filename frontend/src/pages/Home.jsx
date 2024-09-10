import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";

const Home = () => {
  const [rezepte, setRezepte] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  console.log("url ist:", url);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${url}/api`);
        console.log(response);

        const result = await response.json();
        console.log(result);
        setRezepte(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const openModal = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = async () => {
    await fetch(`${url}/api/${selectedId}`, {
      method: "DELETE",
    });
    setRezepte(rezepte.filter((rezept) => rezept._id !== selectedId));
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="big-container">
        <div className="container">
          {rezepte &&
            rezepte.map((rezept) => (
              <div className="item" key={rezept._id}>
                <div className="item-img">Foto</div>
                <h3>{rezept.title}</h3>
                <p>{rezept.kochzeit} min</p>
                {/* <p>{rezept._id}</p> */}
                <div style={{"backgroundColor": '#85858561',"display": "flex", 'justifyContent': 'space-between' ,gap: '15px', fontSize: '1.3rem', padding: '.3rem .5rem'}}>
                <NavLink to={`/${rezept._id}`} style={{textDecoration: 'none'}}>read more</NavLink>
                <button onClick={() => openModal(rezept._id)} style={{'cursor':'pointer'}}>X</button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {isModalOpen && (
        <ConfirmModal confirm={handleDelete} cancel={closeModal} />
      )}
    </>
  );
};

export default Home;
