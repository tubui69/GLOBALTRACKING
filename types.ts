export interface PricingPlan {
  name: string;
  subtext: string;
  price: string;
  duration: string;
  features: string[];
  disabledFeatures?: string[];
  isPopular?: boolean;
  isVip?: boolean;
  colorTheme: 'default' | 'blue' | 'gold';
}

export interface Review {
  name: string;
  avatarLetter: string;
  avatarColor: string;
  text: string;
  purchased: string;
  rating: number;
}

export interface LoginFormData {
  phone: string;
  facebook: string;
  key: string;
}

export type ViewState = 'landing' | 'dashboard';