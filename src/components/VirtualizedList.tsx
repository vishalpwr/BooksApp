import React from 'react'
import { StyleProp } from 'react-native';
import { FlatList, View, ViewStyle } from 'react-native'

type Props = {
  children: React.ReactNode | React.ReactElement;
  style?: StyleProp<ViewStyle>;
  scrollEventThrottle?: number;
  horizontal?: boolean;
  listRef?: React.RefObject<FlatList>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollEnabled?: boolean;
}

function VirtualizedList({ listRef, children, style, scrollEnabled, scrollEventThrottle, horizontal, contentContainerStyle }: Props) {
  return (
    <FlatList
      data={[]}
      ref={listRef}
      horizontal={horizontal}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={contentContainerStyle}
      scrollEventThrottle={scrollEventThrottle}
      keyExtractor={item => 'list'}
      ListFooterComponent={
        <View style={style}>{children}</View>
      }
      renderItem={({ item }) => {
        return null
      }}
    />
  )
}

export default VirtualizedList