import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://campigliamarittima.stepzen.net/api/rousing-seagull/__graphql',
  headers: {
    Authorization:
      'apikey campigliamarittima::stepzen.net+1000::9ac8dfbed83d4c1604c884aacf678494247d1eb24dd19e014127ad37ed7b52d5',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
