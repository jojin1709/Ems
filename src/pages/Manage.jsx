import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";
import { addUserAPI, editUserAPI, getAllUsersAPI } from "../services/allAPI";

const getUserId = (user) => user.id || user._id;

function Manage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    salary: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getSelectedUser = async () => {
      if (!id) {
        return;
      }

      try {
        const result = await getAllUsersAPI();
        if (result.status >= 200 && result.status < 300) {
          const selectedUser = result.data.find(
            (user) => String(getUserId(user)) === id,
          );

          if (selectedUser) {
            setUserData({
              username: selectedUser.username ?? "",
              email: selectedUser.email ?? "",
              salary: selectedUser.salary ?? "",
            });
          }
        }
      } catch (err) {
        console.log("Error fetching selected user:", err);
      }
    };

    getSelectedUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      if (!id) {
        const usersResult = await getAllUsersAPI();
        if (usersResult.status >= 200 && usersResult.status < 300) {
          const userAlreadyExists = usersResult.data.some(
            (user) =>
              user.email?.toLowerCase() === userData.email.trim().toLowerCase(),
          );

          if (userAlreadyExists) {
            setErrorMessage("User already exists");
            return;
          }
        }
      }

      const result = id
        ? await editUserAPI(id, userData)
        : await addUserAPI(userData);

      if (result.status >= 200 && result.status < 300) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log("Error saving user:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleReset = () => {
    setErrorMessage("");
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
            onChange={(e) => {
              setErrorMessage("");
              setUserData({ ...userData, username: e.target.value });
            }}
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => {
              setErrorMessage("");
              setUserData({ ...userData, email: e.target.value });
            }}
          />
        </div>

        {/* SALARY */}
        <div className="mb-3">
          <Form.Control
            type="number"
            placeholder="Salary"
            value={userData.salary}
            onChange={(e) => {
              setErrorMessage("");
              setUserData({ ...userData, salary: e.target.value });
            }}
          />
        </div>

        {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}

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
