import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { fadeIn } from '../variants';
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

function Map() {
  const position = [6.673175, -1.565423];

  return (
    <motion.div 
        variants={fadeIn("up", 0.5, 0)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        className='overflow-hidden rounded-lg h-[400px] w-full mt-24'
    >
        <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{height: '100%', width: '100%'}}
        >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker 
                    position={position} 
                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} 
                >
                    <Popup>
                        Our location
                    </Popup>
                </Marker>
        </MapContainer>
    </motion.div>
  );
}

export default Map;
