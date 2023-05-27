import React from "react";
import { useVehicle } from "./UseVehicle";

const VehicleView = () => {
  const { viewState } = useVehicle();
  return (
    <>
      <h2> Data Vehicles</h2>
      {viewState.isLoading && <div>Loading</div>}
      <div>
        <button className="btn btn-primary mb-2">Add +</button>
      </div>
      <table className="table table-striped table-hover border ">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Model</th>
            <th scope="col">isAutomatic</th>
            <th scope="col">status</th>
            <th scope="col">Sale Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {viewState.data ? (
            viewState.data.map((vehicle, k) => (
              <tr key={k}>
                <th scope="row">{k + 1}</th>
                <td>{vehicle.model}</td>
                <td>{vehicle.isAutomatic ? "True" : "False"}</td>
                <td>{vehicle.status}</td>
                <td>{vehicle.salePrice}</td>
                <td>
                  <button className="btn btn-primary">Detail</button>
                  <button className="btn btn-warning mx-2">Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No row data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default VehicleView;
