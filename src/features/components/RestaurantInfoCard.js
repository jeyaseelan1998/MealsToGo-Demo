import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { colors } from '../../constants/colors';
import { spacing } from '../../constants/sizes';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'some restsursnt',
    icon = 'u',
    photos = [
      'https://media.istockphoto.com/id/1283712032/photo/cardboard-box-filled-with-non-perishable-foods-on-wooden-table-high-angle-view.jpg?s=612x612&w=0&k=20&c=7B2cUwQB2LeBmIh5JElkO5DoE7GRq-CRVmERsMSJoVY=',
      'https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=',
      'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8='
    ],
    address = 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    isOpenNow = true,
    rating = 4,
    isClosedTemprarily = false
  } = restaurant;
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover style={styles.cover} source={{ uri: photos[1] }} />
      <Text style={styles.text}>Card title</Text>
    </Card >
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
  },
  cover: {
    padding: spacing.md,
    backgroundColor: colors.white,
  },
  text: {
    padding: spacing.md,
  },
});