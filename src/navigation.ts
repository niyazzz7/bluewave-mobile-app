export type ScreenKey =
  | 'Home' | 'Chat' | 'Shop' | 'Events' | 'Settings'
  | 'Onboarding' | 'Subscription' | 'Login' | 'Empty' | 'Feedback' | 'Search' | 'Map'
  | 'Profile' | 'Notifications' | 'Favorites' | 'Cart' | 'Checkout' | 'Orders'
  | 'Payments' | 'Addresses' | 'Wallet' | 'Categories' | 'Reviews' | 'Friends'
  | 'EventDetails' | 'Calendar' | 'ResetPassword' | 'Security' | 'Language'
  | 'Appearance' | 'Help' | 'About';

export type Go = (screen: ScreenKey, param?: string) => void;
