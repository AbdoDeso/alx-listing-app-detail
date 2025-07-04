import { ReactNode } from "react";


export interface ButtonProps {
    label?: string 
    variant: 'black' | 'green' | 'white'
    style: 'ButtonStyle'
   
}


export interface LayoutProps {
  children: ReactNode;
}

export interface CardProps {
    label?: string;
  
  }

  export interface PropertyProps {
    name:     string;
    address: {
    state:   string;
    city:    string;
    country: string;
}
    rating:   number;
    category: string[];
    price:    number;

    offers: {
      bed:       string;
      shower:    string;
      occupants: string;
}
    image:    string;
    discount: string;


}




  