import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getItemById } from "../helpers/getItemById";
import { GoogleMap } from "../components/GoogleMap";

export const DescriptionPlace = () => {
  const { id } = useParams();
  const item = useMemo(() => getItemById(id), [id]);

  const navigate = useNavigate();


  const redirectToEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };



  const redirectToURL = (url) => {
    window.open(url, "_blank");
  };

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!item) {
    return <Navigate to="/" />;
  }


  return (
    <div className="row mt-5 mb-5" style={{ backgroundColor: "#eeeee4" }}>
      <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2  animate__animated animate__fadeInLeft">
        {/* <img
          src={`/assets/heroes/${id}.jpg`}
          alt={item.institucion}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        /> */}
      <GoogleMap  longitude={item.longitud} latitude={item.latitud} />
      </div>
      <div className="col-lg-8 col-md-6 col-sm-12 mt-3">
        <h3>{item.institucion}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Rubro: </b>
            {item.rubro}
          </li>
          <li className="list-group-item">
            <b>Dirección: </b>
            {item.direccion}
          </li>
          <li className="list-group-item">
            <b>Email: </b>
            <a href="#" onClick={() => redirectToEmail(item.email)}>{item.email}</a>
          </li>
          <li className="list-group-item">
            <b>Web: </b>
            <a href="#" onClick={() => redirectToURL(item.URL)}>
              {item.URL}
            </a>
          </li>
          <li className="list-group-item">
            <b>Contacto: </b>
            {item.contacto}
          </li>
        </ul>
        <h5 className="mt-3">Descripción</h5>
        <p>{item.descripcion}</p>
        <button className="btn btn-outline-primary mb-3" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
