import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {convertTimeToFormat, TimeFormats} from '../utils/time';

interface CardProps {
  id: string;
  title: string;
  author: string;
  time: string;
  imageUrl: string;
  source: string;
}

const Card = (props: CardProps) => {
  const {title, author, time, imageUrl, source} = props;
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text>{source}</Text>
        <Text>{convertTimeToFormat(TimeFormats.hh_ss, time)}</Text>
      </View>

      <View style={styles.middleRow}>
        <Text style={styles.titleText} numberOfLines={3}>
          {title}
        </Text>
        <Image
          source={{uri: imageUrl}}
          resizeMode="center"
          style={styles.image}
        />
      </View>

      <Text style={styles.authorText} numberOfLines={1}>
        {author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  image: {
    height: 78,
    width: 78,
    borderRadius: 14,
    paddingLeft: 18,
  },
  titleText: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 18,
    lineHeight: 24,
    flex: 1,
  },
  authorText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#818181',
  },
});

export default memo(
  Card,
  (prevProps, newProps) => prevProps.id !== newProps.id,
);
