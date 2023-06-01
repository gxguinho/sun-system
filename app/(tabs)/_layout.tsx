import { Tabs } from 'expo-router'
import { Platform, StyleSheet, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'android' ? 20 : bottom,
          left: 16,
          right: 16,
          elevation: 0,
          backgroundColor: '#151515',
          borderTopWidth: 0,
          borderRadius: 10,
          height: 60,
          ...styles.shadow,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View
                className={`${Platform.OS === 'ios' && 'absolute top-1/2'}`}
              >
                <Icon name="home" color={color} size={size} />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View
                className={`${Platform.OS === 'ios' && 'absolute top-1/2'}`}
              >
                <Icon name="search" color={color} size={size} />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <View
                className={`${Platform.OS === 'ios' && 'absolute top-1/2'}`}
              >
                <Icon name="bookmark" color={color} size={size} />
              </View>
            )
          },
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '7f5d70',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})
