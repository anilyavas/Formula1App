import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import racesResponse from '../../assets/data/races.json';
import RaceListItem from '../components/RaceListItem';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import dayjs from 'dayjs';

const races = racesResponse.data.races.response;

export default function HomeScreen() {
  const sortedRaces = races.sort((r1, r2) =>
    dayjs(r2.date).diff(dayjs(r1.date))
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={races}
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
