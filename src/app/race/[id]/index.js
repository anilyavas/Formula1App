import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function RaceRankings() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>RaceDetails {id}</Text>
    </View>
  );
}
