

import { useEffect, useState } from "react";
import GoogleMapsContext from "../context/GoogleMapsContext";

export const GoogleMap = ({ longitude, latitude }) => {
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(GoogleMapsContext);


  useEffect(() => {
    if (!isGoogleMapsLoaded && typeof longitude === "number" && typeof latitude === "number") {
      const loadGoogleMapsAPI = async () => {
        try {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAhSbL5GpEIwojwabnp-lIG7mk_lZT2nsg&callback=initMap`;
            script.defer = true;
            script.async = true;
            script.onload = () => {
              setIsGoogleMapsLoaded(true);
              resolve();
            };
            script.onerror = reject;
            document.head.appendChild(script);
          });
        } catch (error) {
          console.error("Error al cargar la API de Google Maps:", error);
        }
      };

      loadGoogleMapsAPI();
    }
  }, [isGoogleMapsLoaded, longitude, latitude]);

  useEffect(() => {
    if (isGoogleMapsLoaded && typeof longitude === "number" && typeof latitude === "number") {
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
      };
      const mapElement = document.getElementById("map");
      const map = new window.google.maps.Map(mapElement, mapOptions);
      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
      });
    }
  }, [isGoogleMapsLoaded, longitude, latitude]);

  return <div id="map" style={{ height: "400px" }}></div>;
};


