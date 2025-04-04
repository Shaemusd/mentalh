import { Stack } from 'expo-router';

export default function MoodLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Mood Tracker' }} />
      <Stack.Screen name="details" options={{ title: 'How To Track Your Mood' }} />
    </Stack>
  );
}
