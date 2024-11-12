import React from 'react';
import Card from './Card';
import SwipeableWrapper from './SwipableWrapper';
import Menu from './Menu';

interface SwipableCardProps {
  onPinPress: () => void;
  isPinned: boolean;
  onDeletePress: () => void;
}

const SwipableCard = ({
  onPinPress,
  onDeletePress,
  isPinned,
}: SwipableCardProps) => {
  return (
    <SwipeableWrapper
      leftThreshold={1}
      renderRightActions={() => (
        <Menu
          onDeletePress={onDeletePress}
          onPinPress={onPinPress}
          isPinned={isPinned}
        />
      )}>
      <Card
        id="1"
        title="Apple Intelligence is coming to EU iPhones and iPads in April"
        author="Will Shanklin"
        time="2024-10-28T19:10:28Z"
        imageUrl="https://media.wired.com/photos/672053fafe5589c5d79e9f90/191:100/w_1280,c_limit/Gear_Apple-Mac-mini-front-facing-ports-pink.jpg"
        source="Wired"
      />
    </SwipeableWrapper>
  );
};

export default SwipableCard;
