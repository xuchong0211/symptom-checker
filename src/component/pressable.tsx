import * as React from 'react';
import {Box, Pressable} from 'native-base';
import {ReactNode} from 'react';

function PressWrap({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
}) {
  return (
    <Pressable onPressOut={onPress}>
      {({isHovered, isFocused, isPressed}) => {
        return (
          <Box
            maxW="96"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.9 : 1,
                },
              ],
            }}>
            {children}
          </Box>
        );
      }}
    </Pressable>
  );
}

export default PressWrap;
