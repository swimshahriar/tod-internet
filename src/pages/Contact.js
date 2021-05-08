import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

const Contact = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40], // starting position
      zoom: 9, // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return (
    <div className="px-10 md:px-20 py-5 dark:bg-gray-800 dark:text-gray-100">
      <h1>Conatct Page</h1>
      <div id="map-container" className="h-96"></div>
    </div>
  );
};

export default Contact;
