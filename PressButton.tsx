import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface PressButtonProps {
  onPressHandler: () => void; // Specify the type of onPressHandler prop
  title: string;
}

const PressButton: React.FC<PressButtonProps> = ({ onPressHandler, title }) => {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#dddddd' : '#00ff00' }
      ]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      android_ripple={{ color: '#00f' }}>
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default PressButton;
