export interface Stratagem<T> {
  imageUrl: string;
  onClick: () => void;
  
  data?: T;
}
