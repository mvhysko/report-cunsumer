import { ApolloClient, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { onError } from '@apollo/client/link/error';
import contextState from '../context/store/context.state';

export class ApolloApiClient {
  private static instance: ApolloClient<NormalizedCacheObject>;

  private constructor() {}

  public static getInstance(): ApolloClient<NormalizedCacheObject> {
    const link = from([
      setContext((_, { headers }) => ({
        headers: {
          ...headers,
          authorization: `Bearer ${contextState.token}`
        }
      })),
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        }

        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      createHttpLink({
        uri: process.env.REACT_APP_PROXY,
        credentials: 'include'
      }),
    ]);

    if (!ApolloApiClient.instance) {
      console.log('API CLIENT CREATED!')
      ApolloApiClient.instance = new ApolloClient({
        link,
        cache: new InMemoryCache(),
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          mutate: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
        },
      });
    }

    return ApolloApiClient.instance;
  }
}

export const apiClient = ApolloApiClient.getInstance();
export default apiClient;