import React from 'react';

import { StyleProp, ViewStyle } from 'react-native'
import Colors from '../../constant/Colors';

export interface IconProps {
  type: Function;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

const Icon = ({ type, name, color, size = 24, style = {}, loading }: IconProps) => {
  const Tag = type;
  if (type) {
    return <Tag name={name} size={size} color={color || Colors.dark} style={style} />
  }
  return null;
};


export default Icon;
