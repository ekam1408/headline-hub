import React, {ReactNode} from 'react';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

interface SwipableWrapperProps {
  children: ReactNode;
  leftThreshold?: number;
  rightThreshold?: number;
  overshootLeft?: boolean;
  overshootRight?: boolean;
  renderLeftActions?: () => ReactNode;
  renderRightActions?: () => ReactNode;
}

const SwipeableWrapper = (props: SwipableWrapperProps) => {
  return (
    <Swipeable
      leftThreshold={props.leftThreshold || 0.5}
      rightThreshold={props.rightThreshold || 0.5}
      overshootLeft={props.overshootLeft || false}
      renderLeftActions={props.renderLeftActions}
      renderRightActions={props.renderRightActions}
      overshootRight={props.overshootRight}>
      {props.children}
    </Swipeable>
  );
};

export {SwipeableWrapper as default};
