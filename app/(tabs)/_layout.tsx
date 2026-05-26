import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="game-ai"
        options={{
          title: 'vs AI',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cpu.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: 'vs Player',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="instructions"
        options={{
          title: 'How to Play',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="questionmark.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
