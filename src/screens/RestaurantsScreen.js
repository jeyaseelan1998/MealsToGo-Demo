import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../features/components/RestaurantInfoCard';

import { spacing } from '../constants/sizes';

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbarContainer}>
        <Searchbar
          placeholder="Search"
        // onChangeText={onChangeSearch}
        // value={searchQuery}
        />
      </View>
      <View style={styles.lists}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight, //!android only
  },
  searchbarContainer: {
    padding: spacing.md,
  },
  lists: {
    flex: 1,
    padding: spacing.md,
    // backgroundColor: 'blue',
  },
});
