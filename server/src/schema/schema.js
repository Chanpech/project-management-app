const Project = require('../../models/Project.js');
const Client = require('../../models/Client.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

//Project Type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: { 
        type: ClientType,
        resolve(parent, args){ 
            // Search for client where the id matches the parent's project client id 
            return Client.findById(parent.clientId); 
        },
    },
  }),
});

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
        type: new GraphQLList(ProjectType),
        resolve(parent,args){ 
            return Project.find();
        },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
        type: new GraphQLList(ClientType),
        resolve(parent,args){ 
            return Client.find();
        },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Clients.findById(args.id);
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient:{
           type: ClientType,
           args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            email: {type: GraphQLNonNull(GraphQLString)},
            phone: {type: GraphQLNonNull(GraphQLString)},
           },
           resolve(parent, args) { 
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                });
                return client.save(); //Save client to the database
            },
        },
        //Delete a client
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID)},
            },
            resolve(parent, args){ 
                return Client.findByIdAndRemove(args.id); //This is mongo method
            },
        },
    }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});