import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import { colors } from '../utils/colors'

class RepoCard extends React.Component {
  render() {
    const { item, handleItemClick } = this.props
    const { name, avatar, createdAt, description, language, id } = item
    return (
      <TouchableOpacity onPress={() => handleItemClick(id)}>
        <View style={styles.container}>
          <Image
            resizeMethod="resize"
            source={{ uri: avatar }}
            style={styles.avatar}
          />
          <View style={styles.repoDetailsContainer}>
            <View style={styles.singleDetailContainer}>
              <Text style={styles.labelText}>Name: </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.detailText}
              >
                {name}
              </Text>
            </View>
            <View style={styles.singleDetailContainer}>
              <Text style={styles.labelText}>Date Created: </Text>
              <Text style={styles.detailText}>{createdAt}</Text>
            </View>
            <View style={styles.singleDetailContainer}>
              <Text style={styles.labelText}>Description: </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.detailText}
              >
                {description}
              </Text>
            </View>
            <View style={styles.singleDetailContainer}>
              <Text style={styles.labelText}>Language: </Text>
              <Text style={styles.detailText}>{language}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    width: '96%',
    alignSelf: 'center',
    marginBottom: 10,
    height: 100,
    justifyContent: 'center',
    borderRadius: 5,
  },
  repoDetailsContainer: {
    flex: 3,
    marginLeft: '1%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  detailText: {
    fontSize: 17,
  },
  singleDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    width: '80%',
    height: '80%',
    flex: 1,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 80 / 2,
  },
})

export default RepoCard
