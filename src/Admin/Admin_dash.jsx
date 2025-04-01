import { useState } from "react";
import { FaHome, FaStore, FaLeaf, FaClipboardList, FaUsers, FaUser  } from "react-icons/fa";
import AdminShop from "./admin_shop";
import AdminUserManagement from "./admin_user";
import UserManagement from "./admin_user";
import ProfilePage from "./admin_profile";
import FertilizerManagement from "./admin_fertilizer";

const Sidebar = ({ onMenuClick }) => {
    return (
        <div className="bg-green-800 text-white w-64 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-6">Fertilizer360 Admin</h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("dashboard")}>
                    <FaHome /> Home
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("shop")}>
                    <FaStore /> Shop Management
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("fertilizers")}>
                    <FaLeaf /> Fertilizer Management
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("orders")}>
                    <FaClipboardList /> Orders
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("users")}>
                    <FaUsers /> User Management
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300" onClick={() => onMenuClick("profile")}>
                    <FaUser  /> Profile
                </li>
            </ul>
        </div>
    );
};

const Dashboard = () => {
    return (
        <div className="p-6 w-full">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-md border">
                    <p className="text-gray-600 flex items-center gap-2"><FaStore className="text-green-600" /> Total Shops</p>
                    <h3 className="text-xl font-bold">125</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border">
                    <p className="text-gray-600 flex items-center gap-2"><FaLeaf className="text-green-600" /> Total Fertilizers</p>
                    <h3 className="text-xl font-bold">320</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border">
                    <p className="text-gray-600 flex items-center gap-2"><FaUsers className="text-green-600" /> Total Users</p>
                    <h3 className="text-xl font-bold">500+</h3>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Quick Actions</h3>
                <div className="flex gap-4 mt-3 flex-wrap">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add New Shop</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Manage Fertilizers</button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md">View All Orders</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md">View All Users</button>
                </div>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState("dashboard");

    const renderContent = () => {
        switch (activeMenu) {
            case "dashboard":
                return <Dashboard />;
            case "shop":
                return <AdminShop />;
            case "users":
                return <UserManagement />;
            case "profile":
                return <ProfilePage />;
                case "fertilizers":
                return <FertilizerManagement />
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex">
            <Sidebar onMenuClick={setActiveMenu} />
            {renderContent()}
        </div>
    );
};

export default AdminDashboard;