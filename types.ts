export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Package {
  name: string;
  description: string;
  price: string | null;
  isRecommended: boolean;
  features: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  maps: string;
  socials: {
    instagram: string;
    facebook: string;
  };
}