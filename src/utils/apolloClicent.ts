import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: 'https://server.notes.wuchuheng.com/graphql',
    cache: new InMemoryCache()
})

export default apolloClient;