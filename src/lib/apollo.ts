import { ApolloClient, InMemoryCache } from "@apollo/client/core"
export const client = new ApolloClient({
  uri:'https://api-eu-west-2.graphcms.com/v2/cl4opc8zg0oko01z49w6sa146/master',
  cache: new InMemoryCache()
})