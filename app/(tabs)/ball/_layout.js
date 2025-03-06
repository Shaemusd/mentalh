import { Stack } from 'expo-router';

export default function BallLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Ball' }} />
      <Stack.Screen name="physics" options={{ title: 'Physics' }} />
    </Stack>
  );
}
