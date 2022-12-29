interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;

    textSecondary?: string;
    textPrimary?: string;

    border?: string;
    muted?: string;

    success?: string;

    gray?: string;
  };
  spacing: {
    s0: string;
    s2: string;
    s4: string;
    s8: string;
    s12: string;
    s16: string;
    s20: string;
  };

  radius: {
    s0: string;
    s2: string;
    s4: string;
    s8: string;
    s12: string;
    s16: string;
    s20: string;
    round: string;
  };

  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

interface Variant {
  id: number;
  label: string;
  values: Array<string>;
}
interface Price {
  listPrice: number;
  discountPercent: number;
}

interface Provider {
  id: number;
  name: string;
  avatar?: string;
}

type Space = keyof ThemeConfig["spacing"];
type Color = keyof ThemeConfig["colors"];
type FontSize = keyof ThemeConfig["fontSizes"];
type Radius = keyof ThemeConfig["radius"];

interface ProductPromotion {
  imageUrl?: string;
  label: string;
  description?: string;
  expiredDate?: string;
}

interface RelatedPromotion extends ProductPromotion {
  url?: string;
}

interface Product {
  id: number;
  name: string;
  images?: string[];
  variants?: Variant[];
  price: Price;
  shortDescription?: string;
  brand?: string;
  sku: string;
  freeShipping: boolean;
  provider?: Provider;
  promotions?: {
    selectPromotions?: ProductPromotion[];
    relatedPromotions?: RelatedPromotion[];
  };
  productInfo?: Array<{ label: string; value: string }>;
  description?: string;
  sameBrands?: SameBrandProduct[];
  totalAvailable?: number;
  salePolices: Array<{
    label: string;
    imageUrl?: string;
  }>;
}

type SameBrandProduct = Pick<
  Product,
  "id" | "name" | "price" | "sku" | "brand" | "totalAvailable" | "freeShipping"
> & { imageUrl?: string };
