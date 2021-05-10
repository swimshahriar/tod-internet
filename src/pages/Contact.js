import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { AiFillHome, AiFillPhone, AiFillMail } from "react-icons/ai";

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
      <h1 className="text-center text-3xl font-bold mt-4 mb-6">Contact Page</h1>
      <div id="map-container" style={{ height: "30rem" }}></div>
      <div className="mt-6 flex md:flex-nowrap flex-wrap justify-center align-middle">
        <form className="form w-96" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" className="w-2/3" />
          <br />
          <label htmlFor="email">Email:</label> <br />
          <input type="email" id="email" className="w-2/3" />
          <br />
          <label htmlFor="subject">Subject:</label> <br />
          <input type="text" id="subject" className="w-2/3" />
          <br />
          <label htmlFor="message">Message:</label> <br />
          <textarea row="3" col="5" id="message" className="w-2/3" />
          <br />
          <button className="p-2 mt-2 dark:bg-purple-700 bg-gray-700 dark:hover:bg-purple-800 hover:bg-gray-800 text-gray-100 text-xl font-bold uppercase rounded">
            send
          </button>
        </form>
        <div className="w-96">
          <h3 className="font-bold text-xl">Head Office</h3>
          <div className="mt-3">
            <p className="flex justify-start align-middle mb-2">
              <AiFillHome className="mr-3" />
              Bashundhara R/A, Dhaka
            </p>
            <p className="flex justify-start align-middle mb-2">
              <AiFillPhone className="mr-3" /> +8801777111111
            </p>
            <p className="flex justify-start align-middle">
              <AiFillMail className="mr-3" /> admin@tod.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
