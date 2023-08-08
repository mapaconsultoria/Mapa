import { useContext, useEffect, useState } from "react";
import { InfoWindow } from "google-maps-react";
import { useNavigate } from "react-router-dom";
import GoogleMapsContext from "../context/GoogleMapsContext";

export const GoogleMapsLocations = ({ locations }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const navigate = useNavigate();
  const { isGoogleMapsLoaded } = useContext(GoogleMapsContext);

  useEffect(() => {
    // Cargar la API de Google Maps
    const loadGoogleMapsAPI = async () => {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD54E-tfB3c5lqTwaS8siAi7i1-_qZ2qx0&callback=initMap`;
          script.defer = true;
          script.async = true;
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      } catch (error) {
        console.error("Error al cargar la API de Google Maps:", error);
      }
    };

    // Inicializar el mapa
    const initMap = () => {
      // Obtener la ubicación actual del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 7,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                  {
                    color: "#F2F2F2",
                  },
                ],
              },
              {
                featureType: "water",
                elementType: "all",
                stylers: [
                  {
                    color: "#A4C4D8",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#FFFFFF",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#D3D3D3",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#FFFFFF",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                  {
                    color: "#D3D3D3",
                  },
                ],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#616161",
                  },
                ],
              },
              {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#616161",
                  },
                ],
              },
              {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#616161",
                  },
                ],
              },
              {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#E8E8E8",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "geometry",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#F0F0F0",
                  },
                ],
              },
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                  {
                    visibility: "off",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#C5E6A4",
                  },
                ],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    visibility: "on",
                  },
                  {
                    color: "#6B9A76",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                  {
                    color: "#FFFFFF",
                  },
                ],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                  {
                    color: "#9B8D7A",
                  },
                ],
              },
            ],
          };

          const mapElement = document.getElementById("map");
          const map = new window.google.maps.Map(mapElement, mapOptions);
          setMap(map);
        },
        (error) => {
          console.error("Error al obtener la ubicación actual:", error);
        }
      );
    };

    loadGoogleMapsAPI();
    window.initMap = initMap;
  }, []);

  useEffect(() => {
    if (map) {
      // Limpiar los marcadores existentes
      markers.forEach((marker) => {
        marker.setMap(null);
      });

      const categoryColors = {
        "Entrenamiento Tecnico (Habilidades Laborales)": "green",
        "Orientacion y Servicios Legales": "yellow",
        "Asistencia Psico-social": "blue",
        "Emprendimiento Empresarial (Formalizacion legal y marketing)": "pink",
        "Financiamiento (Creditos)": "purple",
      };

      // Crea íconos personalizados para cada categoría
      const createCustomIcon = (color) =>
        `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`;

      if (locations.length > 0) {
        const newMarkers = locations.map((location) => {
          const markerColor = categoryColors[location.categoria] || "red";
          // Crea el ícono personalizado para el marcador
          const markerIcon = {
            url: createCustomIcon(markerColor),
            scaledSize: new window.google.maps.Size(20, 20),
            // Ajusta el tamaño del icono personalizado según tus necesidades
          };
          const marker = new window.google.maps.Marker({
            position: { lat: location.latitud, lng: location.longitud },
            map: map,
            icon: markerIcon,
          });

          const infoWindowContent = `<div style="background-color: white; padding: 10px;"><strong>${location.institucion}</strong></div>`;
          const infoWindow = new window.google.maps.InfoWindow({
            content: infoWindowContent,
          });

          marker.addListener("click", () => {
            navigate(`/descripcion/${location.id}`);
          });

          marker.addListener("mouseover", () => {
            infoWindow.open(map, marker);
          });

          marker.addListener("mouseout", () => {
            infoWindow.close();
          });

          // Cerrar el InfoWindow al hacer clic en el mapa
          map.addListener("click", () => {
            infoWindow.close();
          });

          return marker;
        });

        const firstMarker = newMarkers[0];
        map.panTo(firstMarker.getPosition());

        setMarkers(newMarkers);
      }
    }
  }, [map, locations]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (map) {
        const mapElement = document.getElementById("map");
        mapElement.style.height = `${window.innerHeight}px`;
        window.google.maps.event.trigger(map, "resize");
      }
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [map]);

  return <div id="map" style={{ height: "100vh" }}></div>;
};
