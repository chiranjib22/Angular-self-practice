export interface Book {
  id: number;
  name: string;
  author: string;
  publishedYear: Date | null;
  rating: number | null;
  publisher: Partial<Publisher>;
  category: string;
  description: string;
}

export interface Publisher {
  publisherName: string;
  publisherType: string;
}
