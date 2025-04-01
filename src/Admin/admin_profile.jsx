import { useState, useEffect } from "react";


export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setFullName(storedUser.name);
    }
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          name: fullName,
          currentPassword: changePassword ? currentPassword : null,
          newPassword: changePassword ? newPassword : null,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify({ ...user, name: fullName }));
        setUser((prevUser) => ({ ...prevUser, name: fullName }));
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-100 relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-5 right-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

      {/* Profile Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center mt-16">
        <img src="src/assets/logo.png" alt="Website Logo" className="w-20 h-20 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-500 mb-4">{user.email}</p>

        {/* Form */}
        <div className="text-left">
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <div className="mt-3 flex items-center">
            <input
              type="checkbox"
              checked={changePassword}
              onChange={() => setChangePassword(!changePassword)}
              className="mr-2"
            />
            <label className="text-gray-700 font-medium">Change Password</label>
          </div>

          {changePassword && (
            <>
              <label className="block text-gray-700 font-medium mt-3">Current Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <label className="block text-gray-700 font-medium mt-3">New Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          )}
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdateProfile}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}