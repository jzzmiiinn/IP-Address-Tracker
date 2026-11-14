import type { IpApiResponse } from "../types/ip";

export async function getIpInfo(ipAddress: string): Promise<IpApiResponse> {
  const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;
  if (!API_KEY) {
    throw new Error("IPify API key is missing.");
  }
  const url = new URL("https://geo.ipify.org/api/v2/country,city");
  url.searchParams.set("apiKey", API_KEY);
  const isIpAddress = /^\d{1,3}(\.\d{1,3}){3}$/.test(ipAddress);
  url.searchParams.set(isIpAddress ? "ipAddress" : "domain", ipAddress);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const data: IpApiResponse = await response.json();
  return data;
}
