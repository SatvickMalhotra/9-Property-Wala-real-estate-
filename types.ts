
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
  status: PropertyStatus;
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
