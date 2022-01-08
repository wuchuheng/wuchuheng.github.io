import {URI} from "./apolloClicent"
import {SubscriptionClient} from "graphql-subscriptions-client";

const WSURI = `wss://${URI}/subscriptions`;

const graphQLWSClient = () => {
    return new SubscriptionClient(WSURI, {
        reconnect: true,
        lazy: true, // only connect when there is a query
        connectionCallback: (error) => {
            error && console.error(error);
        },
    });
}

export default graphQLWSClient