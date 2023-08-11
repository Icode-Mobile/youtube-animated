import { MotiView } from 'moti';
import { Image, Text, View } from 'react-native';

interface InfoChannelProps {
  image: string;
  channelName: string;
  subscribersChannel: number;
  loading: boolean;
}

export const InfoChannel = ({
  channelName,
  image,
  subscribersChannel,
  loading,
}: InfoChannelProps) => {
  return loading ? (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <MotiView
        from={{
          backgroundColor: '#a3a3a3',
        }}
        animate={{
          backgroundColor: '#cecece',
        }}
        transition={{
          type: 'timing',
          loop: true,
          duration: 500,
          delay: 120,
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'gray',
        }}
      />
      <MotiView
        from={{
          backgroundColor: '#a3a3a3',
        }}
        animate={{
          backgroundColor: '#cecece',
        }}
        transition={{
          type: 'timing',
          loop: true,
          duration: 500,
          delay: 150,
        }}
        style={{
          width: '50%',
          height: 15,
          borderRadius: 10,
          backgroundColor: 'gray',
          marginLeft: 10,
        }}
      />
      <MotiView
        from={{
          backgroundColor: '#a3a3a3',
        }}
        animate={{
          backgroundColor: '#cecece',
        }}
        transition={{
          type: 'timing',
          loop: true,
          duration: 500,
          delay: 150,
        }}
        style={{
          width: '20%',
          height: 25,
          borderRadius: 15,
          backgroundColor: 'gray',
          marginLeft: 5,
        }}
      />
    </View>
  ) : (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      />
      <Text
        style={{
          color: '#fff',
          marginLeft: 10,
        }}
      >
        {channelName}
      </Text>
      <Text
        style={{
          color: '#a7a6a6',
          marginLeft: 5,
        }}
      >
        {subscribersChannel}
      </Text>
    </>
  );
};
