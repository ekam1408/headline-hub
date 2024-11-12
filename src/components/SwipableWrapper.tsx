import React, {ReactNode} from 'react';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

interface SwipableWrapperProps {
  children: ReactNode;
  leftThreshold?: number;
  rightThreshold?: number;
}

const SwipeableWrapper = (props: SwipableWrapperProps) => {
  return (
    <Swipeable
      leftThreshold={props.leftThreshold || 0.2}
      rightThreshold={props.rightThreshold || 0.2}>
      {props.children}
    </Swipeable>
  );
};

export {SwipeableWrapper as default};
