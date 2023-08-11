import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { Heading } from './src/components/Heading';
import { InfoChannel } from './src/components/InfoChannel';
import { SubHeading } from './src/components/SubHeading';
import { Video } from './src/components/Video';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        paddingTop: 30,
      }}
    >
      <View
        style={{
          width: '100%',
        }}
      >
        <Video loading={loading} />
        <View
          style={{
            width: '100%',
            padding: 10,
          }}
        >
          <Heading
            loading={loading}
            text='LIVE sobre ANIMAÇÕES | React Native Reanimated'
          />
          <SubHeading loading={loading} hour={2} views={20} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <InfoChannel
              loading={loading}
              channelName='Icode Mobile'
              image='https://github.com/Icode-Mobile.png'
              subscribersChannel={464}
            />
          </View>
        </View>
      </View>
      <StatusBar style='light' backgroundColor='transparent' translucent />
    </View>
  );
}
