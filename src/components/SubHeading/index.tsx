import { MotiView } from 'moti';
import { Text } from 'react-native';

interface SubHeadingProps {
  views: number;
  hour: number;
  loading: boolean;
}

export const SubHeading = ({ hour, views, loading }: SubHeadingProps) => {
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
        delay: 100,
      }}
      style={{
        width: '50%',
        height: 12,
        borderRadius: 8,
        backgroundColor: 'gray',
        marginTop: 5,
        marginLeft: 5,
      }}
    />
  ) : (
    <Text
      style={{
        fontSize: 13,
        color: '#adadad',
        marginTop: 3,
      }}
    >
      {views} views {hour}h atrás{' '}
      <Text
        style={{
          color: '#fff',
        }}
      >
        ...mais
      </Text>
    </Text>
  );
};
