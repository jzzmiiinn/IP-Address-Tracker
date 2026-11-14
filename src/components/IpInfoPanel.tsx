import { InfoItem } from "./InfoItem";
import { useIpInfo } from "../hooks/useIpInfo";

interface IpInfoPanelProps {
  ipAddress: string;
}

export const IpInfoPanel = ({ ipAddress }: IpInfoPanelProps) => {
  const { data, isLoading, isError, error } = useIpInfo(ipAddress);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-3 rounded-xl bg-white p-8 shadow-lg absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[hsl(240,100%,50%)]" />
        <p className="text-sm font-medium text-gray-600">
          Finding IP information...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <span className="text-2xl text-red-600">!</span>
        </div>

        <h2 className="text-lg font-bold text-gray-800">
          Unable to retrieve IP information
        </h2>

        <p className="max-w-md text-sm text-gray-500">
          {error instanceof Error
            ? error.message
            : "Something went wrong. Please try again."}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const infoItems = [
    { title: "IP Address", value: data.ip },
    {
      title: "Location",
      value: `${data.location.city}, ${data.location.country}`,
    },
    { title: "Timezone", value: `UTC ${data.location.timezone}` },
    { title: "ISP", value: data.isp },
  ];

  return (
    <div className="bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 shadow-lg p-6 text-center mx-auto md:text-left md:max-w-[1000px] w-[90%] md:mx-auto absolute -top-10 left-1/2 -translate-x-1/2 z-10">
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
