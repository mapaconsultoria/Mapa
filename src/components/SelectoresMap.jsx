import {  useState } from "react";
import { getCategories } from "../helpers/getCategories";
import { GoogleMapsLocations } from "./GoogleMapsLocations";
import { getFilterData } from "../helpers/getFilterData";

export const SelectoresMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
 
  const  data  = getCategories(selectedCountry);
  const  data2  = getFilterData(selectedCountry,selectedCategory);
  const uniqueCategories = [...new Set(data.map((pais) => pais.categoria))];



  

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCategory(""); // Reiniciar el valor del selector de categorías al cambiar el país
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
    <div className="d-flex">
      <select className="form-select" value={selectedCountry} onChange={handleCountryChange} style={{backgroundColor:'#eeeee4'}}>
        <option value="">Elige un país</option>
        <option value="Honduras">Honduras</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Salvador">El Salvador</option>
      </select>

      <select className="form-select" value={selectedCategory} onChange={handleCategoryChange} disabled={!selectedCountry} style={{backgroundColor:'#eeeee4'}}>
        <option value="Todos">Todas las categorías</option>
        {
            uniqueCategories.map((categoria,index)=>(
             <option key={index} value={categoria}>{categoria}</option>
           ))
        }
      </select>
      </div>
      <div>
        <GoogleMapsLocations locations={data2}/>
      </div>

    </div>
  );
};


