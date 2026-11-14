import { create } from "zustand";

interface IpStore {
  ipAddress: string;
  setIpAddress: (ipAddress: string) => void;
}

export const useIpStore = create<IpStore>((set) => ({
  ipAddress: "8.8.8.8",

  setIpAddress: (ipAddress) => set({ ipAddress }),
}));
