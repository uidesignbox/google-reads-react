const _ = require('lodash');
const fetch = require('node-fetch');
let nytKey = '236c8ec924b04206a3c1fdee381d7079';

let {
   GraphQLString,
   GraphQLList,
   GraphQLObjectType,
   GraphQLInt,
   GraphQLSchema,
} = require('graphql');

const GoogleCovers = new GraphQLObjectType({
   name: 'GoogleCovers',
   description: 'Retrieve books covers from Google Books API.',
   fields: () => ({
      small: {
         type: GraphQLString,
         resolve: data => data.smallThumbnail
      },
      normal: {
         type: GraphQLString,
         resolve: data => data.thumbnail
      }
   })
});

const ISBNS = new GraphQLObjectType({
   name: "ISBNS",
   description: "Get the main isbns of book.",
   fields: () => ({
      isbn10: {
         type: GraphQLString,
         resolve: data => data.isbn10
      },
      isbn13: {
         type: GraphQLString,
         resolve: data => data.isbn13
      }
   })
})

const VolumeInfo = new GraphQLObjectType({
   name: 'VolumeInfo',
   description: 'Volume info for seach queries',
   fields: () => ({
      title: {
         type: GraphQLString,
         resolve: data => data.title
      },
      subtitle: {
         type: GraphQLString,
         resolve: data => data.subtitle
      },
      authors: {
         type: GraphQLString,
         resolve: data => data.authors[0]
      },
      publisher: {
         type: GraphQLString,
         resolve: data => data.publisher
      },
      description: {
         type: GraphQLString,
         resolve: data => data.description
      },
      language: {
         type: GraphQLString,
         resolve: data => data.language
      },
      published_date: {
         type: GraphQLString,
         resolve: data => data.publishedDate
      },
      page_count: {
         type: GraphQLInt,
         resolve: data => data.pageCount
      },
      categories: {
         type: GraphQLString,
         resolve: data => data.categories[0]
      },
      images: {
         type: GoogleCovers,
         resolve: data => data.imageLinks
      },
      preview_book: {
         type: GraphQLString,
         resolve: data => data.previewLink
      }
   })
})

const GoogleBooks = new GraphQLObjectType({
   name: 'GoogleBooks',
   description: 'Get search results from Google Books API.',
   fields: () => ({
      volume_info: {
         type: VolumeInfo,
         resolve: data => data.volumeInfo
      }
   })
})

const NYTBooks = new GraphQLObjectType({
   name: 'NYTBooks',
   description: 'Find books from a NYT book list.',
   fields: () => ({
      title: { 
         type: GraphQLString,
         resolve: data => data.title
      },
      description: { 
         type: GraphQLString,
         resolve: data => data.description
      },
      author: { 
         type: GraphQLString,
         resolve: data => data.author
      },
      contributor: { 
         type: GraphQLString,
         resolve: data => data.contributor
      },
      publisher: { 
         type: GraphQLString,
         resolve: data => data.publisher
      },
      primary_isbn13: { 
         type: GraphQLString,
         resolve: data => data.primary_isbn13
      },
      primary_isbn10: { 
         type: GraphQLString,
         resolve: data => data.primary_isbn10
      }
   })
});

const BookListInfo = new GraphQLObjectType({
   name: "BookListInfo",
   fields: () => ({
      published_date: {
         type: GraphQLString,
         resolve: data => data.published_date
      },
      amazon_product_url: {
         type: GraphQLString,
         resolve: data => data.amazon_product_url
      },
      details: {
         type: new GraphQLList(NYTBooks),
         resolve: data => data.book_details
      },
      isbns: {
         type: new GraphQLList(ISBNS),
         resolve: data => data.isbns
      }
   })
});

module.exports = new GraphQLSchema({
   query: new GraphQLObjectType({
      name: 'Main',
      description: 'Schema Query Root',
      fields: () => ({
         book_list: {
            description: "Retrieve NYT book list info from a defined list.",
            type: new GraphQLList(BookListInfo),
            resolve: (root) => {
               return fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list-name=paperback-nonfiction&api-key=${nytKey}`)
               .then(response => response.json())
               .then(data => data.results)
            }
         },
         search_title: {
            description: 'Perform search query for books and its possible volumes using title.',
            args: {
               title: { type: GraphQLString }
            },
            type: new GraphQLList(GoogleBooks),
            resolve: (root, args) => {
               return fetch(`https://www.googleapis.com/books/v1/volumes?q=${args.title}`)
               .then(response => response.json())
               .then(data => data.items)
            }
         },
         search_isbn: {
            description: 'Perform search query for books and its possible volumes using isbn number.',
            args: {
               isbn: { type: GraphQLString }
            },
            type: new GraphQLList(GoogleBooks),
            resolve: (root, args) => {
               return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${args.isbn}`)
               .then(response => response.json())
               .then(data => data.items)
            }
         }
      })
   })
})