import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import racesResponse from '../../assets/data/races.json';
import RaceListItem from '../components/RaceListItem';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import dayjs from 'dayjs';

// const races = racesResponse.data.races.response;
import { useQuery, gql } from '@apollo/client';

const query = gql`
  query MyQuery {
    races(season: "2023", type: "RACE") {
      response {
        id
        date
        competition {
          location {
            country
          }
          name
        }
        season
      }
    }
  }
`;

export default function HomeScreen() {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error fetching races: {error.message}</Text>;
  }
  console.log(JSON.stringify(data));
  const races = [...data.races.response];
  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRaces}
        renderItem={({ item, index }) => (
          <RaceListItem item={item} round={sortedRaces.length - index} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});
