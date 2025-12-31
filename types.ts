
import React from 'react';

export interface PricingLane {
  id: string;
  name: string;
  subtitle: string;
  intent: string;
  availability?: string;
  terms: string;
  price: string;
  priceNote?: string;
  buttonText: string;
  highlight?: boolean;
  icon: React.ReactNode;
  badge?: string;
}

export interface IntegrityPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}
