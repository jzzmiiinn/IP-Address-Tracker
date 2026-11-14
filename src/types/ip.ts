export interface IpApiResponse {
  ip: string;
  location: IpLocation;
  isp: string;
}

export interface IpLocation {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
}
