import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

function Manage({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedUser = users.find((user) => String(user.id) === id);

  const [userData, setUserData] = useState(
    selectedUser || {
      username: "",
      email: "",
      salary: "",
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      setUsers((allUsers) =>
        allUsers.map((user) =>
          String(user.id) === id ? { ...user, ...userData } : user,
        ),
      );
    } else {
      setUsers((allUsers) => [
        ...allUsers,
        {
          ...userData,
          id: Date.now(),
        },
      ]);
    }

    navigate("/dashboard");
  };

  const handleReset = () => {
    setUserData({
      username: "",
      email: "",
      salary: "",
    });
  };

  return (
    <div className="container text-center my-5">
      <h1>{id ? "Edit User" : "Add User"}</h1>

      <form className="my-5 border rounded p-5" onSubmit={handleSubmit}>
        {/* USERNAME */}
        <div className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>

        {/* SALARY */}
        <div className="mb-3">
          <Form.Control
            type="number"
            placeholder="Salary"
            value={userData.salary}
            onChange={(e) =>
              setUserData({ ...userData, salary: e.target.value })
            }
          />
        </div>

        <div className="mb-5">
          <button type="submit" className="btn btn-info me-3">
            {id ? "UPDATE USER" : "ADD USER"}
          </button>

          <button
            type="button"
            className="btn btn-warning"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

export default Manage;
