import React from "react";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>User Profile</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <button onClick={() => {
        localStorage.removeItem("user");
        window.location.href = "/";
      }}>
        Logout
      </button>

    </div>
  );
}

export default Profile;