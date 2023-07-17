import { data } from "../api/data";

export const getFilterData = (country, category) => {
  if (category === "Todos") {
    return data.filter((item) => item.pais === country);
  } else {
    return data.filter((item) => item.pais === country && item.categoria === category);
  }
};

