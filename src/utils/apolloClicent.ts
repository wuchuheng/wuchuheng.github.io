import {ApolloClient, InMemoryCache} from "@apollo/client";

export const URI = 'server.notes.wuchuheng.com'

const apolloClient = new ApolloClient({
    uri: `https://${URI}/graphql`,
    cache: new InMemoryCache()
});

export default apolloClient;
