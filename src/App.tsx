import { Header } from "./components/Header";
import { IpInfoPanel } from "./components/IpInfoPanel";
import { MapView } from "./components/MapView";
import { useIpInfo } from "./hooks/useIpInfo";
import { useIpStore } from "./store/ipStore";

function App() {
  const ipAddress = useIpStore((state) => state.ipAddress);
  const setIpAddress = useIpStore((state) => state.setIpAddress);
  const { data } = useIpInfo(ipAddress);
  return (
    <>
      <Header onSearch={setIpAddress} />
      <main className="relative">
        {data && (
          <MapView
            latitude={data.location.lat}
            longitude={data.location.lng}
            ipAddress={data.ip}
            city={data.location.city}
            country={data.location.country}
          />
        )}
        <IpInfoPanel ipAddress={ipAddress} />
      </main>
    </>
  );
}

export default App;
