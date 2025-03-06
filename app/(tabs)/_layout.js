import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PhysicsProvider } from './ball/context/_PhysicsContext'; // or the correct relative path
export default function TabLayout() {
    return (
        <PhysicsProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#ffd33d',
                    headerStyle: {
                        backgroundColor: '#25292e',
                    },
                    headerShaadowVisible: false,
                    headerTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#25292e',
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="mood"
                    options={{
                        title: 'Mood Tracker',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'happy-sharp' : 'happy-outline'} color={color} size={24} />),

                    }}
                />
                <Tabs.Screen
                    name="ball"
                    options={{
                        title: 'Ball Bouncer',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'football-sharp' : 'football-outline'} color={color} size={24} />
),
                    }}
                />
                <Tabs.Screen
                    name="about"
                    options={{
                        title: 'Resources',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                        ),
                    }}
                />
                {/* Hack to hide index, which is just a redirect */}
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarItemStyle: { display: "none" },
                    }}
                />
            </Tabs>
        </PhysicsProvider>
    );
}
