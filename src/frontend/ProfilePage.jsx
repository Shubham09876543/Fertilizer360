import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./CSS/ProfilePage.css"; // Import CSS file

const ProfilePage = () => {
  const [fullName, setFullName] = useState("Shubham");
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully!");
  };

  return (
    <div>
      <Navbar /> {/* Navbar */}

      <div className="profile-container">
        <div className="profile-card">
          {/* Profile Avatar & Name */}
          <img src="/profile-avatar.png" alt="Profile" className="profile-avatar" />
          <h2 className="profile-name">Shubham Gajera</h2>
          <p className="profile-email">shubhamgajera122@gmail.com</p>

          {/* Profile Form */}
          <form onSubmit={handleSubmit}>
            <label className="profile-label">Full Name</label>
            <input
              type="text"
              className="profile-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            {/* Change Password Checkbox */}
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="profile-checkbox"
                checked={changePassword}
                onChange={() => setChangePassword(!changePassword)}
              />
              <label>Change Password</label>
            </div>

            {/* Password Fields */}
            {changePassword && (
              <>
                <label className="profile-label">Current Password</label>
                <input
                  type="password"
                  className="profile-input"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <label className="profile-label">New Password</label>
                <input
                  type="password"
                  className="profile-input"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </>
            )}

            {/* Edit Button */}
            <button type="submit" className="profile-button">Edit</button>
          </form>
        </div>
      </div>

      <Footer /> {/* Footer */}
    </div>
  );
};

export default ProfilePage;
