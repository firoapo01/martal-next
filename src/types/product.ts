export interface Product {
  id: string;
  brand: string;
  name: string;
  name_en: string;
  price: number;
  old_price?: number;
  badge?: string;
  colors: string[];
  type: string;
  diameter: number;
  water_content: number;
  images: string[];
  in_stock: boolean;
}
