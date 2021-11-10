import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useQuery} from 'urql';

const RepositoryNameQuery = `
  query RepositoryNameQuery {
    # feel free to change owner/name here
    repository(owner: "facebook" name: "relay") {
      name
    }
  }
`;

const Name = () => {
  const [result, reexecuteQuery] = useQuery({
    query: RepositoryNameQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Oh no... {error.message}</Text>;
  }

  return <Text>{data.repository.name}</Text>;
};

const UrqlTestScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Name />
      </View>
    </SafeAreaView>
  );
};

export default UrqlTestScreen;
