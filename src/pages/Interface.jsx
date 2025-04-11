import React, { useState } from "react";
import { Home, Settings, User, Layers } from "lucide-react";
import Timedimention from "../components/Timedimention";
import LayerOne from "../components/LayerOne";
import Layertow from "../components/Layertow";
import Layerthree from "../components/Layerthree";
import Layer4 from "../components/Layer4";
import temprature from "../imgs/background0.jpeg";
import rainimg from "../imgs/rain-img.jpg";
import wind from "../imgs/Wind-img.jpg";

const layers = [
  { id: 1, title: "Temperature", imgSrc: temprature },
  { id: 2, title: "Humidity", imgSrc: rainimg },
  { id: 3, title: "Eastward-Wind", imgSrc: wind },
  { id: 4, title: "Northward-Wind", imgSrc: wind },
  { id: 5, title: "Layer 5", imgSrc: "layer5.png" },
  { id: 6, title: "Layer 6", imgSrc: "layer6.png" },
];

export default function Interface() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [layersVisible, setLayersVisible] = useState(true);
  const [activeLayer, setActiveLayer] = useState(1); // Default to Temperature

  const renderActiveLayer = () => {
    switch (activeLayer) {
      case 1:
        return <Timedimention />;
      case 2:
        return <LayerOne />;
      case 3:
        return <Layertow />;
      case 4:
        return <Layerthree />;
      case 5:
        return <Layer4 />;
      default:
        return <Timedimention />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="absolute inset-0">
        {renderActiveLayer()}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white shadow-lg transition-all duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } w-96 z-[2000] flex flex-row`}
      >
        <div className="flex-1 flex flex-col justify-between p-4">
          <button
            className="w-[250px] mb-4 mr-4 p-2 bg-gray-800 text-white rounded self-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>

          {/* Layer List */}
          {layersVisible && (
            <div className="space-y-4 overflow-y-auto max-h-[90vh] pr-2">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className={`p-4 rounded cursor-pointer transition-colors ${
                    activeLayer === layer.id
                      ? "bg-blue-300 shadow-md"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveLayer(layer.id)}
                >
                  <img
                    src={layer.imgSrc}
                    alt={layer.title}
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="text-center mt-2 text-lg font-semibold">
                    {layer.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icons Section */}
        <div className="flex flex-col justify-center items-center space-y-4 p-4 bg-gray-300 rounded-l-lg">
          <div
            className={`p-3 rounded-full cursor-pointer transition-colors ${
              !layersVisible ? "bg-blue-400" : "hover:bg-gray-400"
            }`}
            onClick={() => setLayersVisible(!layersVisible)}
          >
            <Layers size={28} />
          </div>
          <div className="p-3 hover:bg-gray-400 rounded-full cursor-pointer transition-colors">
            <Home size={28} />
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        className={`fixed top-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg z-[2000] transition-all ${
          sidebarOpen ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        onClick={() => setSidebarOpen(true)}
      >
        <Layers size={24} />
      </button>
    </div>
  );
}
