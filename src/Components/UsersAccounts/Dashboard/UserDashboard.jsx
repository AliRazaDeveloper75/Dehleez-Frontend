import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import BottomBar from "../../BottomBar/BottomBar";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-5">
        {user ? (
          <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone_number}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <BottomBar />
    </>
  );
};

export default UserDashboard;
