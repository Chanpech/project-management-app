import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: `http://localhost:${port}`,
    cache: new InMemoryLRUCache(),
  });
  
  const root = createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
      </ApolloProvider>
    </React.StrictMode>
  );
  