import { MotiView } from 'moti';
import { Text } from 'react-native';

interface HeadingProps {
  text: string;
  loading: boolean;
}

export const Heading = ({ text, loading }: HeadingProps) => {
  return loading ? (
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
      }}
      style={{
        width: '100%',
        height: 20,
        borderRadius: 10,
        backgroundColor: 'gray',
        overflow: 'hidden',
      }}
    />
  ) : (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
      }}
    >
      {text}
    </Text>
  );
};
