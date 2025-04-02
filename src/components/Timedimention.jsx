import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-timedimension/dist/leaflet.timedimension.control.css";
import "leaflet-timedimension";
import L from "leaflet";

const TimeDimensionWMSLayer = () => {
  const map = useMap();

  useEffect(() => {
    // if (!map.timeDimension) {
    //   map.timeDimension = new L.TimeDimension();
    // }

    

    // insert time manualy
    if (!map.timeDimension) {
        map.timeDimension = new L.TimeDimension({
            times: [
                "2024-11-09T00:00:00.000Z",
                "2024-11-09T01:00:00.000Z",
                "2024-11-09T02:00:00.000Z",
                "2024-11-09T03:00:00.000Z",
                "2024-11-09T04:00:00.000Z",
                "2024-11-09T05:00:00.000Z",
                "2024-11-09T06:00:00.000Z",
                "2024-11-09T07:00:00.000Z",
                "2024-11-09T08:00:00.000Z",
                "2024-11-09T09:00:00.000Z",
                "2024-11-09T10:00:00.000Z",
                "2024-11-09T11:00:00.000Z",
                "2024-11-09T12:00:00.000Z",
                "2024-11-09T13:00:00.000Z",
                "2024-11-09T14:00:00.000Z",
                "2024-11-09T15:00:00.000Z",
                "2024-11-09T16:00:00.000Z",
                "2024-11-09T17:00:00.000Z",
                "2024-11-09T18:00:00.000Z",
                "2024-11-09T19:00:00.000Z",
                "2024-11-09T20:00:00.000Z",
                "2024-11-09T21:00:00.000Z",
                "2024-11-09T22:00:00.000Z",
                "2024-11-09T23:00:00.000Z",
                "2024-11-10T00:00:00.000Z "
          ].join(","),
        });
      }

    const wmsLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Aromwork/wms?", {
      layers: "t2mWorckfile",
      format: "image/png",
      transparent: true,
      version: "1.1.1",
    });

    const timeDimensionLayer = L.timeDimension.layer.wms(wmsLayer, {
      updateTimeDimension: true,
    });

    timeDimensionLayer.addTo(map);

    if (!map.timeDimensionControl) {
      map.timeDimensionControl = new L.Control.TimeDimension({
        position: "bottomleft",
        autoPlay: true,
        loopButton: true,
        timeSliderDragUpdate: true,
      });
      map.addControl(map.timeDimensionControl);
    }

    return () => {
      map.removeLayer(timeDimensionLayer);
    };
  }, [map]);

  return null;
};

const GeoServerTimeLayer = () => {
  return (
    <MapContainer center={[30.0, 3.0]} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TimeDimensionWMSLayer />
    </MapContainer>
  );
};

export default GeoServerTimeLayer;
