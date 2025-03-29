import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setFrequency(null);
    setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enter the frequency here...</h2>
      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-200">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter frequency..."
          required
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            "Estimate Area"
          )}
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