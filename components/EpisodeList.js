import React from 'react';
import { View } from 'react-native';
import episodes from '../constants/Episodes';
import { ListItem } from 'react-native-elements'
import _ from 'lodash';

import queryString from 'query-string';

export default function EpisodeList(props) {

  // Let's force some sort params here.
  episodes.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <View>
    {
      episodes.map((l, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: getImageURL(l.img) } }}
          title={l.title}
          subtitle={l.series}
        />
      ))
    }
  </View>
  );
}

function getImageURL(uri) {
  return queryString.parse(decodeURIComponent(uri)).u;
}
