import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      {/* Title Section */}
      <div className="d-flex justify-content-between mt-5 align-items-center">
        <h1>Welcome ADMIN</h1>

        {/* ✅ ADD USER */}
        <Link to="/add" className="btn btn-primary">
          + ADD USER
        </Link>
      </div>

      <div className="m-5">
        <h3 className="text-center text-warning">ALL USERS LIST</h3>

        <table className="table table-hover my-5 shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>SALARY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Max_Power</td>
              <td>max@example.com</td>
              <td>$5000</td>

              <td>
                <div className="d-flex gap-3">
                  {/* ✅ EDIT */}
                  <Link to="/edit/1" className="btn btn-outline-warning btn-sm">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>

                  {/* DELETE */}
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
