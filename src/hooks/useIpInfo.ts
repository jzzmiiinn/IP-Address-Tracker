import { useQuery } from "@tanstack/react-query";
import { getIpInfo } from "../api/ipApi";

export const useIpInfo = (ipAddress: string) => {
  const queryKey = ["ipInfo", ipAddress];
  const queryFn = () => getIpInfo(ipAddress);

  return useQuery({
    queryKey,
    queryFn,
    enabled: Boolean(ipAddress?.trim()),
  });
};
