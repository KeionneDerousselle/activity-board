export const LOW_PRICE_MAX = 15;
export const MID_PRICE_MAX = 49;

export const LOW_PRICE_RATING = 1;
export const MID_PRICE_RATING = 2;
export const HIGH_PRICE_RATING = 3;

export const PRICE_RANGE = 3;

export const convert = price => {
  if(price <= LOW_PRICE_MAX) return LOW_PRICE_RATING;
  if(price <= MID_PRICE_MAX) return MID_PRICE_RATING;
  if(price > MID_PRICE_MAX) return HIGH_PRICE_RATING;
  
  return LOW_PRICE_RATING;
};

