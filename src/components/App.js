import React, { useState } from "react";

export default function App() {
  // Data source
  const data = [
    {
      name: "Madhya Pradesh",
      description: "Known as the 'Heart of India' for its central location.",
      cities: [
        {
          name: "Bhopal",
          description: "The capital city with beautiful lakes.",
          landmarks: [
            {
              name: "Taj-ul-Masajid",
              description: "One of the largest mosques in India."
            },
            {
              name: "Upper Lake",
              description: "Historic man-made lake."
            }
          ]
        },
        {
          name: "Indore",
          description: "The largest city, famous for street food.",
          landmarks: [
            {
              name: "Rajwada Palace",
              description: "Historic palace of the Holkar dynasty."
            },
            {
              name: "Lal Bagh Palace",
              description: "19th-century palace with ornate architecture."
            }
          ]
        }
      ]
    },
    {
      name: "Maharashtra",
      description: "Home to Mumbai, the financial capital of India.",
      cities: [
        {
          name: "Mumbai",
          description: "The city of dreams.",
          landmarks: [
            {
              name: "Gateway of India",
              description: "Iconic arch monument built in the 20th century."
            },
            {
              name: "Marine Drive",
              description: "Scenic promenade along the coast."
            }
          ]
        },
        {
          name: "Pune",
          description: "Known for its educational institutions.",
          landmarks: [
            {
              name: "Shaniwar Wada",
              description: "Historic fortification in the city."
            },
            {
              name: "Aga Khan Palace",
              description: "Landmark with historical significance."
            }
          ]
        }
      ]
    }
  ];

  // State selections (indices)
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  // Handle State change
  const handleStateChange = (e) => {
    const newStateIndex = parseInt(e.target.value);
    setStateIndex(newStateIndex);
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  // Handle City change
  const handleCityChange = (e) => {
    const newCityIndex = parseInt(e.target.value);
    setCityIndex(newCityIndex);
    setLandmarkIndex(0);
  };

  // Handle Landmark change
  const handleLandmarkChange = (e) => {
    setLandmarkIndex(parseInt(e.target.value));
  };

  // Current selections
  const selectedState = data[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  return (
    <div style={{ padding: "20px" }}>
      <h1>State → City → Landmark</h1>

      {/* State Dropdown */}
      <label htmlFor="state">State: </label>
      <select id="state" value={stateIndex} onChange={handleStateChange}>
        {data.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <label htmlFor="city" style={{ marginLeft: "10px" }}>City: </label>
      <select id="city" value={cityIndex} onChange={handleCityChange}>
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Landmark Dropdown */}
      <label htmlFor="landmark" style={{ marginLeft: "10px" }}>Landmark: </label>
      <select id="landmark" value={landmarkIndex} onChange={handleLandmarkChange}>
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      {/* Details */}
      <div style={{ marginTop: "20px" }}>
        <div id="state-name"><strong>State:</strong> {selectedState.name}</div>
        <div id="state-description">{selectedState.description}</div>

        <div id="city-name" style={{ marginTop: "10px" }}><strong>City:</strong> {selectedCity.name}</div>
        <div id="city-description">{selectedCity.description}</div>

        <div id="landmark-name" style={{ marginTop: "10px" }}><strong>Landmark:</strong> {selectedLandmark.name}</div>
        <div id="landmark-description">{selectedLandmark.description}</div>
      </div>
    </div>
  );
}
