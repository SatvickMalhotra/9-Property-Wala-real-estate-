export enum PropertyStatus {
  ForSale = 'For Sale',
  ForRent = 'For Rent',
  SaleOrRent = 'For Sale/Rent'
}

export interface Property {
  id: number;
  title: string;
  price: string;
  description: string;
  beds: number;
  area: number;
  image: string;
  images: string[];
  status: PropertyStatus;
  amenities: string[];
  address: string;
  mapEmbedUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface NavLinkItem {
  path: string;
  name: string;
}

export interface ServiceArea {
  name: string;
  subLinks: string[];
}