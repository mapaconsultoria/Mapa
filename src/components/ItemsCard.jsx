import { Link } from "react-router-dom";


export const ItemsCard = ({ id,institucion,categoria,pais }) => {

  const paisImageUrl = `/assets/paises/${pais}.jpg`;
  
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col animate__animated animate__fadeIn mb-3">
      <div className="card"  style={{ height: "100%",  backgroundColor: "#eeeee4" }}>
        <div className="row no-gutters">
          <div className="col-4 "> 
          <div
              className="card-img"
              style={{
                backgroundImage: `url(${paisImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            ></div>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title" style={{ height: "100px", overflow: "hidden" }}>{institucion}</h5>
              <p className="card-text" style={{ height: "50px", overflow: "hidden" }}>{categoria}</p>
              {/* {alter_ego !== characters && <p>{characters}</p>} */}
              {/* <p className="card-text">
                <small className="text-muted">{direccion}</small>
              </p> */}

              <Link to={`/descripcion/${id}`}>Detalles ...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
