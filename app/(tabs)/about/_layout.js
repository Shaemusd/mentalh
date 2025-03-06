import { Stack } from 'expo-router';

export default function AboutLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Resources' }} />
      <Stack.Screen name="sad_info" options={{ title: 'Happy Reasources' }} />
      <Stack.Screen name="anger_info" options={{ title: 'Calming Resources' }} />
      <Stack.Screen name="therapy" options={{ title: 'Therapy Resources' }} />
    </Stack>
  );
}
