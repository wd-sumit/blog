import { ApolloServer } from 'apollo-server-express';
import { env } from '@helpers/utils';
import resolvers from '@graphql/resolvers';
import typeDefs from '@graphql/typeDefs';

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => ({
    req: req,
  }),
  playground:
    env('NODE_ENV') === 'production'
      ? false
      : {
          settings: {
            'request.credentials': 'include',
            'editor.theme': 'dark',
            'schema.polling.enable': false,
          },
        },
  tracing: true,
  introspection: true,
  
});

export default server;
