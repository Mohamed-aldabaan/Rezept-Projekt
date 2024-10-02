import { Route, Routes } from "react-router-dom"
import './App.css'

import Layout from "./components/Layout";
import Home from "./pages/Home.jsx";
import RezeptDetails from "./pages/RezeptDetails.jsx";
import AddRezept from "./pages/AddRezept.jsx";
import UpdateRezept from "./pages/UpdateRezept.jsx";


function App() {

  return (
   
    <div>
      <Routes>

        <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="/:id" element={<RezeptDetails/>}/>
        <Route path="/addRezept" element ={<AddRezept/>}/>
        <Route path="update/:id" element={<UpdateRezept />} />

      </Routes>
    </div>
  )
}

export default App
