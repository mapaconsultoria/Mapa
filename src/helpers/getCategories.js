import { data } from "../api/data";

export const getCategories = (country) => {
  // const validCategories = [
  //   "Entrenamiento Tecnico (Habilidades Laborales)",
  //   "Orientacion y Servicios Legales",
  //   "Emprendimiento Empresarial (Formalizacion legal y marketing)",
  //   "Asistencia Psico-social",
  //   "Financiamiento (Creditos)",
  // ];

  return data.filter((pais) => pais.pais === country);

};
