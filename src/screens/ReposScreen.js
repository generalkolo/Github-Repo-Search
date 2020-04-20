import React, { Component } from 'react'
import { StyleSheet, Platform, View, Text } from 'react-native'
import Constants from 'expo-constants'
import { Toolbar } from 'react-native-material-ui'

import RepoList from '../components/RepoList'
import { firstLetterToUpperCase } from '../utils/helpers'

const HeaderText = (props) => {
  const { query } = props
  return (
    <Text
      numberOfLines={1}
      ellipsizeMode="tail"
      style={{
        color: 'white',
        fontSize: 22,
      }}
    >
      Top {firstLetterToUpperCase(query)} Repositories
    </Text>
  )
}

class ReposScreen extends Component {
  handleItemClick = (id) => {
    const { route, navigation } = this.props
    const { params } = route
    const { items } = params

    const selectedItem = items.find((item) => item.id === id)

    navigation.navigate('RepositoryDetailsScreen', {
      selectedItem,
    })
  }

  render() {
    const { route, navigation } = this.props
    const { params } = route
    const { items, query } = params

    return (
      <View style={styles.container}>
        <Toolbar
          centerElement={<HeaderText query={query} />}
          leftElement="arrow-back"
          onLeftElementPress={() => {
            navigation.goBack()
          }}
        />
        <RepoList items={items} handleItemClick={this.handleItemClick} />
      </View>
    )
  }
}

export default ReposScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
})
