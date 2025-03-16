import React from 'react';

function Table() {
  return (
    <div className="w-full bg-gray-100 pt-10">
      <div className="max-w-full w-full bg-white shadow-md rounded-lg p-6 border">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">About AWR29XX</h3>
        <p className="text-gray-700 leading-relaxed text-justify px-4">
          The AWR29XX is a high-performance radar chip designed for automotive applications, offering enhanced RF capabilities 
          and advanced signal processing for accurate detection and tracking. It supports frequencies from 76 to 81 GHz and 
          integrates multiple transmit and receive paths to improve object resolution and range.
        </p>
      </div>
    </div>
  );
}

export default Table;
