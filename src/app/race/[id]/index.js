import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import raceResponse from '../../../../assets/data/race.json';

const race = raceResponse.data.races.response[0];

export default function RaceDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.page}>
      <Text style={{ fontFamily: 'F1-Regular', fontSize: 24 }}>
        <Text style={styles.countryName}>
          {race.competition.location.country}{' '}
        </Text>
        {race.season}
      </Text>
      <Text>{race.circuit.name}</Text>
      <Image
        source={{ uri: race.circuit.image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 15,
  },
  countryName: {
    fontSize: 24,
    fontFamily: 'F1-Bold',
  },
});
