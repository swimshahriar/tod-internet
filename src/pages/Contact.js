import React, { useEffect, useContext, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { AiFillHome, AiFillPhone, AiFillMail } from "react-icons/ai";

// global state
import { GlobalState } from "../context/context";

// styles
import "mapbox-gl/dist/mapbox-gl.css";

const Contact = () => {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

  const state = useContext(GlobalState);
  const [contents, setContents] = useState(state.en.contact);

  // content set
  useEffect(() => {
    if (state.lan === "Bn") {
      setContents(state.bn.contact);
    } else {
      setContents(state.en.contact);
    }
  }, [state.lan, state.en.contact, state.bn.contact]);

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
      <h1 className="text-center text-3xl font-bold mt-4 mb-6">
        {contents.title}
      </h1>
      <div id="map-container" style={{ height: "30rem" }}></div>

      <div className="mt-6 flex md:flex-nowrap flex-wrap justify-center align-middle">
        <form
          className="form w-96"
          onSubmit={(e) => e.preventDefault()}
          method="POST"
          netlify
        >
          <label htmlFor="name">{contents.form[0]}:</label> <br />
          <input type="text" id="name" className="w-2/3 mt-2 mb-2" />
          <br />
          <label htmlFor="email">{contents.form[1]}:</label> <br />
          <input type="email" id="email" className="w-2/3 mt-2 mb-2" />
          <br />
          <label htmlFor="subject">{contents.form[2]}:</label> <br />
          <input type="text" id="subject" className="w-2/3 mt-2 mb-2" />
          <br />
          <label htmlFor="message">{contents.form[3]}:</label> <br />
          <textarea row="3" col="5" id="message" className="w-2/3 mt-2 mb-2" />
          <br />
          <button className="p-2 mt-2 dark:bg-purple-700 bg-gray-700 dark:hover:bg-purple-800 hover:bg-gray-800 text-gray-100 text-xl font-bold uppercase rounded">
            {contents.button}
          </button>
        </form>
        <div className="w-96">
          <h3 className="font-bold text-xl">{contents.office.title}</h3>
          <div className="mt-3">
            <p className="flex justify-start align-middle mb-2">
              <AiFillHome className="mr-3" />
              {contents.office.address}
            </p>
            <p className="flex justify-start align-middle mb-2">
              <AiFillPhone className="mr-3" /> {contents.office.phone}
            </p>
            <p className="flex justify-start align-middle">
              <AiFillMail className="mr-3" /> {contents.office.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
