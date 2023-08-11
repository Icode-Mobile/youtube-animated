import { AnimatePresence } from 'moti';
import { ActivityIndicator, Text, View } from 'react-native';

interface VideoProps {
  loading: boolean;
}

export const Video = ({ loading }: VideoProps) => {
  return (
    <AnimatePresence>
      <View
        style={{
          backgroundColor: '#999',
          width: '100%',
          height: 250,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!loading ? (
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Renderizar vídeo{' '}
          </Text>
        ) : (
          <ActivityIndicator size={'large'} color={'#d6d6d6'} />
        )}
      </View>
    </AnimatePresence>
  );
};
