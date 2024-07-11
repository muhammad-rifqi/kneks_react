import React from "react";

const CardBerita = () => {
  return (
    <div className="border p-4 rounded shadow w-75 mx-auto" style={{ maxWidth: "500px" }}>
      <div className="position-relative h-100 mb-4 d-flex justify-content-center align-items-center bg-secondary bg-opacity-50">
        <svg
          className="w-25 h-25 text-secondary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
          style={{ width: "40px", height: "40px" }}
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="bg-secondary bg-opacity-50 rounded mb-4" style={{ height: "16px" }}></div>
      <div className="bg-secondary bg-opacity-50 rounded mb-3" style={{ height: "12px" }}></div>
      <div className="bg-secondary bg-opacity-50 rounded mb-3" style={{ height: "12px" }}></div>
      <div className="bg-secondary bg-opacity-50 rounded mb-3" style={{ height: "12px" }}></div>
      <div className="bg-secondary bg-opacity-50 rounded mb-3" style={{ height: "12px" }}></div>
      <div className="bg-secondary bg-opacity-50 rounded mb-3" style={{ height: "12px" }}></div>
    </div>
  );
};

export default CardBerita;
