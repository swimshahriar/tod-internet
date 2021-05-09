import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

// styles
import "mapbox-gl/dist/mapbox-gl.css";

const Contact = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.4218029, 23.8122928], // starting position
      zoom: 15, // starting zoom
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Create a default Marker and add it to the map.
    new mapboxgl.Marker().setLngLat([90.4218029, 23.8122928]).addTo(map);
  }, []);

  return (
    <div className="px-10 md:px-20 py-5 dark:bg-gray-800 dark:text-gray-100">
      <h1 className="text-center text-2xl font-bold mt-4 mb-6">Conatct Page</h1>
      <div id="map-container" style={{ height: "30rem" }}></div>
      <div className="mt-6 flex">
        <form className="form">
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" className="" />
          <br />
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" className="" />
          <br />
          <label htmlFor="subject">Subject:</label> <br />
          <input type="text" id="subject" className="" />
          <br />
          <label htmlFor="message">Message:</label> <br />
          <textarea row="3" col="5" id="message" className="" />
          <br />
        </form>
        <div>
          <h3>Head Office</h3>
          <div>
            <p>Address:</p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
