import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//screens
import QueryScreen from './src/screens/QueryScreen'
import ReposScreen from './src/screens/ReposScreen'
import RepoDetailsScreen from './src/screens/RepoDetailsScreen'

const appStack = createStackNavigator()

function AppStackScreens() {
  return (
    <appStack.Navigator headerMode="none" initialRouteName={QueryScreen}>
      <appStack.Screen name="QueryScreen" component={QueryScreen} />
      <appStack.Screen name="RepositoriesScreen" component={ReposScreen} />
      <appStack.Screen
        name="RepositoryDetailsScreen"
        component={RepoDetailsScreen}
      />
    </appStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreens />
    </NavigationContainer>
  )
}
