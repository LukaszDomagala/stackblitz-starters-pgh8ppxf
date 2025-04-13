export interface PageDto {
  totalItems: number;
  items: BookDto[];
}

export interface BookDto {
  // TODO
}

// GET https://www.googleapis.com/books/v1/volumes?q=Angular
const booksPageResponse = {
  "totalItems": 35,
  "items": [
    {
      "id": "xeZDDwAAQBAJ",
      "volumeInfo": {
        "title": "Expert Angular",
        "authors": [
          "Mathieu Nayrolles",
          "Rajesh Gunasundaram",
          "Sridhar Rao"
        ],
        "imageLinks": {
          "thumbnail": "http://books.google.com/books/content?id=xeZDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
      },
    },
    {
      "id": "n5mJAwAAQBAJ",
      "volumeInfo": {
        "title": "Pro AngularJS",
        "authors": [
          "Adam Freeman"
        ],
        "imageLinks": {
          "thumbnail": "http://books.google.com/books/content?id=n5mJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
      },
    }
  ]
}

export interface BookDetailsDto {
  // TODO
}

// GET https://www.googleapis.com/books/v1/volumes/xeZDDwAAQBAJ
const bookDetailsResponse = {
  "id": "xeZDDwAAQBAJ",
  "volumeInfo": {
    "title": "Expert Angular",
    "authors": [
      "Mathieu Nayrolles",
      "Rajesh Gunasundaram",
      "Sridhar Rao"
    ],
    "publisher": "Packt Publishing Ltd",
    "publishedDate": "2017-07-31",
    "description": "Learn everything you need to build highly scalable, robust web applications using Angular.",
    "pageCount": 454,
    "imageLinks": {
      "thumbnail": "http://books.google.com/books/publisher/content?id=xeZDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE707FpidIXqmDG6T-qUFJuObaJDJIHo8k7CsBKTlQxGJTEvaIa1jnETw3VBB61kDqSttWG0V24RA_WF8zvrXMhYA0rUCUCMBVq9WZZhwWb6GMi8bXXNe-EiAwlRrcXRP0YfiSMet&source=gbs_api",
    },
  },
}


export interface Book {
  id: string;
  title: string;
  authors: string;
  thumbnail?: string;
}

export interface BookDetails {
  id: string;
  title: string;
  authors: string;
  thumbnail?: string;
  description?: string;
  publisher?: string;
  publishedDate?: string;
  pageCount?: number;
}