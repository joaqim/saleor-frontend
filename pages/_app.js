import "tailwindcss/tailwind.css";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://demo.saleor.io/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
