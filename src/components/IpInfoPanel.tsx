import { InfoItem } from "./InfoItem";

const infoItems = [
  { title: "Ip address", value: "192.212.174.101" },
  { title: "location", value: "Brooklyn, NY 10001" },
  { title: "timezone", value: "UTC -05:00" },
  { title: "isp", value: "SpaceX Starlink" },
];

export const IpInfoPanel = () => {
  return (
    <div className="bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 shadow-lg p-6 text-center max-w-[350px] mx-auto md:text-left md:max-w-[1000px] md:mx-auto -mt-10">
      {infoItems.map((infoItem) => {
        return (
          <InfoItem
            key={infoItem.title}
            title={infoItem.title}
            value={infoItem.value}
          />
        );
      })}
    </div>
  );
};
