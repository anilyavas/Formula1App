import React from 'react';
import { FlatList } from 'react-native';
import raceRankingResponse from '../../../../assets/data/race-rankings.json';
import RankingListItem from '../../../components/RankingListItem';

const raceRankings = raceRankingResponse.data.raceRankings.response;
export default function QualifyingScreen() {
  return (
    <FlatList
      data={raceRankings}
      renderItem={({ item }) => <RankingListItem item={item} />}
    />
  );
}
