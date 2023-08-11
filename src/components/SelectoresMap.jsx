import {  useEffect, useState } from "react";
import { getCategories } from "../helpers/getCategories";
import { GoogleMapsLocations } from "./GoogleMapsLocations";
import { getFilterData } from "../helpers/getFilterData";

export const SelectoresMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
 
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

    // Guardar los valores seleccionados en el localStorage al cambiar
    useEffect(() => {
      localStorage.setItem("selectedCountry", selectedCountry);
      localStorage.setItem("selectedCategory", selectedCategory);
    }, [selectedCountry, selectedCategory]);
  
    // // Recuperar los valores del localStorage al cargar la página
    // useEffect(() => {
    //   const storedCountry = localStorage.getItem("selectedCountry");
    //   const storedCategory = localStorage.getItem("selectedCategory");
  
    //   if (storedCountry) {
    //     setSelectedCountry(storedCountry);
    //   }
  
    //   if (storedCategory) {
    //     setSelectedCategory(storedCategory);
    //   }
    // }, []);

      // Restablecer valores al cargar la página principal
  useEffect(() => {
    // Recuperar los valores guardados en el localStorage y restablecer los selectores
    const storedCountry = localStorage.getItem("selectedCountry");
    const storedCategory = localStorage.getItem("selectedCategory");

    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }
  }, []);

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
        <option value="" disabled hidden>Selecciona una opción...</option>
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


