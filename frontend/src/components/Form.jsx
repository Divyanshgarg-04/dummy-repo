import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setFrequency(null);
    
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        features: Number(inputValue),
      });
      console.log(response);
      setFrequency(response.data.prediction);
      setInputValue("");
    } catch (error) {
      console.error("Error sending data:", error);
      setErrorMessage("Failed to get Area. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-28 bg-gray-100 px-4">
      <h2 className="text-2xl font-semibold mb-4">Enter the frequency here...</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter frequency..."
          required
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Estimate Area
        </button>
      </form>
      {frequency !== null && (
        <p className="mt-4 text-2xl text-blue-600 font-bold">Expected Area: {frequency}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-lg text-red-500 font-medium">{errorMessage}</p>
      )}
    </div>
  );
};

export default Form;