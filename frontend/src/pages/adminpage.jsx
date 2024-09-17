import React from 'react';

const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6 text-xl font-bold border-b border-gray-700">Admin Dashboard</div>
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Users</li>
            <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Products</li>
            <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Orders</li>
            <li className="px-6 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-gray-800">Welcome, Admin</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Log Out</button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="mt-2 text-gray-600">1,200 active users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Products</h2>
              <p className="mt-2 text-gray-600">850 available products</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Orders</h2>
              <p className="mt-2 text-gray-600">95 pending orders</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="mt-2 text-gray-600">$45,300 total revenue</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
