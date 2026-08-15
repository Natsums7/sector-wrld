export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'VOID HOODIE',
    price: '$180',
    category: 'OUTERWEAR',
    image: 'https://images.pexels.com/photos/28701960/pexels-photo-28701960.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'NEW',
  },
  {
    id: 'p2',
    name: 'SECTOR TEE / 001',
    price: '$65',
    category: 'TOPS',
    image: 'https://images.pexels.com/photos/15127546/pexels-photo-15127546.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    id: 'p3',
    name: 'GHOST CARGO',
    price: '$145',
    category: 'BOTTOMS',
    image: 'https://images.pexels.com/photos/6153751/pexels-photo-6153751.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    tag: 'LIMITED',
  },
  {
    id: 'p4',
    name: 'SHADOW CAP',
    price: '$45',
    category: 'ACCESSORIES',
    image: 'https://images.pexels.com/photos/14241847/pexels-photo-14241847.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
];

export interface CollectionItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

export const collectionItems: CollectionItem[] = [
  {
    id: 'c1',
    name: 'STATIC JACKET',
    price: '$220',
    image: 'https://images.pexels.com/photos/12104691/pexels-photo-12104691.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
  {
    id: 'c2',
    name: 'PROTOCOL HOODIE',
    price: '$190',
    image: 'https://images.pexels.com/photos/19461581/pexels-photo-19461581.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
  {
    id: 'c3',
    name: 'DECAY TEE',
    price: '$60',
    image: 'https://images.pexels.com/photos/34582210/pexels-photo-34582210.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
  {
    id: 'c4',
    name: 'RUIN CARGO',
    price: '$155',
    image: 'https://images.pexels.com/photos/6153565/pexels-photo-6153565.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
  {
    id: 'c5',
    name: 'NIGHT OPS JACKET',
    price: '$240',
    image: 'https://images.pexels.com/photos/13911532/pexels-photo-13911532.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
  {
    id: 'c6',
    name: 'SECTOR MASK',
    price: '$35',
    image: 'https://images.pexels.com/photos/16871903/pexels-photo-16871903.jpeg?auto=compress&cs=tinysrgb&h=800&w=600',
  },
];
