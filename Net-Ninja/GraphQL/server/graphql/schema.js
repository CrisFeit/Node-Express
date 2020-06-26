const graphql = require('graphql')

const { GraphQLID,
        GraphQLInt,
        GraphQLString ,
        GraphQLSchema,
        GraphQLObjectType,
        GraphQLList
    } = graphql

//mock

let books = [
    {name: 'Name of the Wind',      genre: 'Fantasy', id: '1' , authorId: '1'},
    {name: 'The Final Empire',      genre: 'Fantasy', id: '2',  authorId: '2'},
    {name: 'The Long Earth',        genre: 'Sci-Fi' , id: '3',  authorId: '3'},
    {name: 'The Hero of Ages',      genre: 'Fantasy', id: '4' , authorId: '2'},
    {name: 'The Colour of Magic',   genre: 'Fantasy', id: '5',  authorId: '3'},
    {name: 'The Light Fantastic',   genre: 'Sci-Fi' , id: '6',  authorId: '3'},
]

let authors = [
    {name: 'Partrick Rothfuss' , age:44 , id:'1'},
    {name: 'Brandon Sanderson' , age:42 , id:'2'},
    {name: 'Terry Pratchett' ,   age:66 , id:'3'},
    
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=> ({
        id    :  {type: GraphQLID},
        name  :  {type: GraphQLString},
        genre :  {type: GraphQLString},
        author:  {
            type: AuthorType,
            resolve(parent,args){
                return authors.find(({id}) => id == parent.authorId )
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: ()=> ({
        id    :  {type: GraphQLID},
        age   :  {type: GraphQLInt},
        name  :  {type: GraphQLString},
        books :  {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return books.filter(({authorId}) => authorId == parent.id  )
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name  : 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return books.find(({id}) => id === args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent,args){
                return books
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors
            }
        },
        author:{
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return authors.find(({id}) => id == args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})