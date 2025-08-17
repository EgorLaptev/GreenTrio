// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  badges: string[]
  ingredients: Ingredient[]
}

export interface Ingredient {
  id: number
  name: string
  image: string
  alt: string
  description: string
}

// Navigation types
export interface NavigationItem {
  label: string
  path: string
  icon?: string
}

// UI Component types
export interface TabItem {
  id: string
  label: string
  content: string
}

// Animation types
export interface AnimationConfig {
  duration: number
  ease: string
  delay?: number
}

// Theme types
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}
