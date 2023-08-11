
import { Route, Routes, useLocation } from "react-router-dom";
import {
  DescriptionPlace,
  GuatemalaPage,
  HondurasPage,
  InicioPages,
  SalvadorPage,
} from "../pages";
import { Navbar } from "../components/Navbar";


export const MapaRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<InicioPages />} />
          <Route path="descripcion/:id" element={<DescriptionPlace />} />
          <Route path="honduras" element={<HondurasPage />} />
          <Route path="guatemala" element={<GuatemalaPage />} />
          <Route path="salvador" element={<SalvadorPage />} />

          <Route path="/*" element={<InicioPages />}></Route>
        </Routes>
      </div>
    </>
  );
};
