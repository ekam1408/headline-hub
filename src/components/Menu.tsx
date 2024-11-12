import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {DELETE, PIN} from '../assets/images';

interface ImageWithTitleProps {
  image: any;
  title: string;
  onPress: () => void;
}

const ImageWithTitle = ({image, title, onPress}: ImageWithTitleProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.itemContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

interface MenuProps {
  onDeletePress: () => void;
  onPinPress: () => void;
  isPinned: boolean;
}

const Menu = ({onDeletePress, onPinPress, isPinned}: MenuProps) => {
  return (
    <View style={styles.container}>
      <ImageWithTitle image={DELETE} title={'Delete'} onPress={onDeletePress} />
      <ImageWithTitle
        image={PIN}
        title={isPinned ? 'Unpin' : 'Pin'}
        onPress={onPinPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#4BBDFC',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 26,
    width: 26,
  },
  text: {
    color: '#FFFFFF',
  },
});

export default Menu;
