import { Text, View } from 'react-native';

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-foreground">Welcome to Fitness Tracker Mobile!</Text>
      <Text className="mt-4 text-muted-foreground">
        Built with Expo Router, React Native Web, and NativeWind
      </Text>
    </View>
  );
}
