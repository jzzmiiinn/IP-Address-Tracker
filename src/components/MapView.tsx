import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapViewProps {
  latitude: number;
  longitude: number;
  ipAddress: string;
  city: string;
  country: string;
}

export const MapView = ({
  latitude,
  longitude,
  ipAddress,
  city,
  country,
}: MapViewProps) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={true}
      className="z-0 h-[450px] w-full sm:h-[500px] md:h-[550px] lg:h-[600px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]}>
        <Popup>
          <div className="text-sm">
            <p className="font-bold">{ipAddress}</p>
            <p>
              {city}, {country}
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
