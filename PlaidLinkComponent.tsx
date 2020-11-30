import React from 'react';
import {
  Pressable,
} from 'react-native';
import {
  PlaidLinkComponentProps,
} from './Types';

import {
  useDeepLinkRedirector,
  openLink,
} from './PlaidLink';

export const PlaidLink : React.ReactNode = (props: PlaidLinkComponentProps) => {
  useDeepLinkRedirector();
  return <Pressable onPress={() => openLink(props)}>{props.children}</Pressable>;
};
