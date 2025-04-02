import { Link } from "react-router-dom";
import { Home, UserCog, Users, Search, Plus, ChevronDown, Menu, Settings, LogOut, X, LayoutDashboard } from "lucide-react";
import Logo from "../imgs/logo2.png";
import CardImage1 from "../imgs/shutterstock_150027575-1024x576.jpg";
import CardImage2 from "../imgs/searchMeetimg.jpg";
import CardImage3 from "../imgs/searchMeetimg.jpg";
import { useState } from "react";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Original users data
  const allUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", role: "Controleur" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "5551234567", role: "Lecteur" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", phone: "4445556666", role: "Lecteur" },
    { id: 5, name: "John Smith", email: "john.smith@example.com", phone: "1112223333", role: "Admin" },
    { id: 6, name: "Emily Davis", email: "emily@example.com", phone: "9998887777", role: "Controleur" },
    { id: 7, name: "Michael Wilson", email: "michael@example.com", phone: "7778889999", role: "Lecteur" },
    { id: 8, name: "Sarah Johnson", email: "sarah@example.com", phone: "6665554444", role: "Lecteur" },
  ];

  // Filter users based on search term
  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const roles = ["Admin", "Controleur", "Lecteur"];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navigation Bar */}
      <nav className="flex items-center bg-gray-900 text-white p-4 shadow-md h-[100px]">
        <div className="flex items-center absolute left-4">
          <img src={Logo} alt="Logo" className="h-[130px] w-[280px]" />
        </div>
        
        <div className="flex justify-center items-center space-x-10 w-full">
          <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/controler" className="flex items-center space-x-2 hover:text-gray-300">
            <UserCog className="h-5 w-5" />
            <span>Controler</span>
          </Link>
          <Link to="/lecteur" className="flex items-center space-x-2 hover:text-gray-300">
            <Users className="h-5 w-5" />
            <span>Lecteur</span>
          </Link>
        </div>

        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="flex items-center absolute right-4 hover:text-gray-300"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-[#060923] text-white shadow-lg z-50 flex flex-col">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="hover:text-gray-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* User info */}
          <div className="p-3 flex flex-col items-center border-b border-gray-700">
            <div className="bg-gray-600 rounded-full p-4">
              <UserCog className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">Admin User</span>
          </div>
          
          {/* Interface section */}
          <div className="p-4 flex-grow">
            <div className="flex items-center space-x-3 p-3 text-white hover:bg-gray-700 rounded-lg cursor-pointer">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Interface Mapping</span>
            </div>

            <div className="flex items-center space-x-3 p-3 text-white hover:bg-gray-700 rounded-lg cursor-pointer">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">users</span>
            </div>
          </div>
          
          {/* Bottom buttons */}
          <div className="p-4 border-t border-gray-700">
            <button className="flex items-center space-x-3 w-full p-3 hover:bg-gray-700 rounded-lg mb-2">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="flex items-center space-x-3 w-full p-3 hover:bg-gray-700 rounded-lg text-red-400">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Cards Section with Improved Shadows */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] 
              shadow-lg hover:shadow-xl shadow-gray-300/50 hover:shadow-gray-400/60">
            <img 
              src={CardImage1} 
              alt="Service 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Service One</h3>
              <p className="text-gray-600">
                Description of the first service offered by your platform.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] 
              shadow-lg hover:shadow-xl shadow-gray-300/50 hover:shadow-gray-400/60">
            <img 
              src={CardImage2} 
              alt="Service 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Service Two</h3>
              <p className="text-gray-600">
                Description of the second service offered by your platform.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] 
              shadow-lg hover:shadow-xl shadow-gray-300/50 hover:shadow-gray-400/60">
            <img 
              src={CardImage3} 
              alt="Service 3" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Service Three</h3>
              <p className="text-gray-600">
                Description of the third service offered by your platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced User Table Section with Improved Shadows */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-[12px] p-6 
            shadow-lg hover:shadow-xl transition-shadow duration-300
            shadow-gray-300/50 hover:shadow-gray-400/60">
          
          {/* Title and Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">User Table</h2>
            
            <div className="flex w-full md:w-auto space-x-4">
              {/* Search Bar */}
              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              
              {/* Add User Button */}
              <button className="flex items-center space-x-2 bg-[#0f1552] hover:bg-[#0a1040] text-white px-4 py-2 rounded-lg transition-colors
                  shadow-md hover:shadow-lg shadow-blue-900/30 hover:shadow-blue-900/40">
                <Plus className="h-4 w-4" />
                <span>Add User</span>
              </button>
            </div>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto rounded-[12px]">
            <table className="min-w-full divide-y divide-gray-200 rounded-[12px]">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-[12px]">User Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-[12px]">Change Role</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="relative">
                        <select
                          defaultValue={user.role}
                          className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                              shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;