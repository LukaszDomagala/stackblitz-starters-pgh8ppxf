export interface BookDto {
  
}


export interface Book {
  id: string;
  title: string;
  authors: string;
  description?: string;
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
  imageLinks?: {
    thumbnail: string;
  };
}