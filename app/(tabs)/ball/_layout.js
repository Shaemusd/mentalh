import { Stack } from 'expo-router';

export default function BallLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Ball' }} />
      <Stack.Screen name="physics" options={{ title: 'Physics' }} />
      {/* <Stack.Screen name="/context/_ApperanceContext" options={{ title: 'AP_C' }} />
      <Stack.Screen name="/(tabs)/ball/context/_PhysicsContext.js" options={{ title: 'PC' }} /> */}
    </Stack>
  );
}
