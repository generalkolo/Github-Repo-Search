import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Linking,
} from 'react-native'
import Constants from 'expo-constants'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import numeral from 'numeral'
import { Button, Divider } from 'react-native-elements'
import Modal from 'react-native-modal'
import { Toolbar } from 'react-native-material-ui'

export default class RepoDetailsScreen extends Component {
  state = {
    showErrorModal: false,
  }

  openWebBrowser = (url) => {
    Linking.openURL(url).catch((err) =>
      this.setState(() => ({ showErrorModal: true })),
    )
  }

  render() {
    const { route, navigation } = this.props
    const { params } = route
    const { selectedItem } = params
    const {
      avatar,
      createdAt,
      description,
      forkCount,
      githubUrl,
      issues,
      language,
      license,
      name,
      owner,
      ownerGithubUrl,
      starCount,
      watchers,
    } = selectedItem

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          centerElement="Repo Details"
          onLeftElementPress={() => {
            navigation.goBack()
          }}
        />
        <ScrollView style={styles.scrollView}>
          <View>
            <Modal
              backdropTransitionOutTiming={0}
              swipeDirection="down"
              style={styles.modal}
              isVisible={this.state.showErrorModal}
              onBackdropPress={() => this.setState({ showErrorModal: false })}
            >
              <View style={styles.modalView}>
                <Text style={{ justifyContent: 'center', marginBottom: 10 }}>
                  An Error occurred while opening web page, please try again
                  later.
                </Text>
                <Button
                  title="Dismiss"
                  onPress={() =>
                    this.setState(() => ({ showErrorModal: false }))
                  }
                />
                />
              </View>
            </Modal>
            <Image
              resizeMethod="resize"
              source={{ uri: avatar }}
              style={styles.avatar}
            />
            <View style={styles.repoDetailsContainer}>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Name: </Text>
                <Text style={styles.detailText}>{name}</Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Author/Owner: </Text>
                <Text style={styles.detailText}>{owner}</Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Language: </Text>
                <Text style={styles.detailText}>{language}</Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Created On: </Text>
                <Text style={styles.detailText}>{createdAt}</Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>URL (Github): </Text>
                <Button
                  type="outline"
                  title={githubUrl}
                  onPress={() => this.openWebBrowser(githubUrl)}
                />
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Author URL (Github): </Text>
                <Button
                  type="outline"
                  title={ownerGithubUrl}
                  onPress={() => this.openWebBrowser(ownerGithubUrl)}
                />
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>License: </Text>
                <Text style={styles.detailText}>{license}</Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Text style={styles.labelText}>Open Issues: </Text>
                <Text style={styles.detailText}>
                  {numeral(issues).format('0,0')}
                </Text>
              </View>
              <View style={styles.singleDetailContainer}>
                <Octicons name="repo-forked" size={30} />
                <Text style={styles.countText}>
                  {numeral(forkCount).format('0,0')}
                </Text>
                <FontAwesome name="star-o" size={30} />
                <Text style={styles.countText}>
                  {numeral(starCount).format('0,0')}
                </Text>
                <Octicons name="eye" size={30} />
                <Text style={styles.countText}>
                  {numeral(watchers).format('0,0')}
                </Text>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.labelText}>Description</Text>
              <Divider style={styles.divider} />
              <Text style={styles.detailText}>{description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: '#F5F5F5',
  },
  scrollView: { padding: 10 },
  divider: {
    backgroundColor: '#46C2F8',
    height: 3,
    borderRadius: 15,
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    flexDirection: 'column',
    marginTop: 10,
  },
  avatar: {
    width: 200,
    height: 200,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 200 / 2,
  },
  repoDetailsContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: '30%',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    flex: 1,
  },
  countText: {
    margin: 10,
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  detailText: {
    fontSize: 20,
    flexWrap: 'wrap',
  },
  singleDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 10,
    width: '98%',
  },
})
