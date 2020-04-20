import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Modal from 'react-native-modal'
// import LottieView from 'lottie-react-native'

import { getQueriedRepos } from '../api/githubApi'

class QueryScreen extends React.Component {
  state = {
    text: '',
    isLoading: false,
  }

  handleTextChange = (text) => {
    this.setState(() => ({
      text,
    }))
  }

  async handleQuerySearch(query) {
    this.setState(() => ({
      isLoading: true,
    }))
    // this.animation.play()
    try {
      const answer = await getQueriedRepos(query)
      this.setState(() => ({
        isLoading: false,
      }))
      // this.animation.pause()
      this.props.navigation.navigate('RepositoriesScreen', {
        items: Array.from(answer),
        query,
      })
    } catch (error) {
      this.setState(() => ({
        isLoading: false,
        showModal: true,
      }))
    }
  }

  render() {
    const { text, isLoading } = this.state
    return (
      <View style={styles.container}>
        {isLoading === false ? (
          <View style={styles.countContainer}>
            <Modal
              backdropTransitionOutTiming={0}
              swipeDirection="down"
              style={styles.modal}
              isVisible={this.state.showModal}
              onBackdropPress={() => this.setState({ showModal: false })}
            >
              <View style={styles.modalView}>
                <Text style={{ justifyContent: 'center', marginBottom: 10 }}>
                  An Error occurred while making network request, please try
                  again later
                </Text>
                <Button
                  title="Dismiss"
                  onPress={() => this.setState(() => ({ showModal: false }))}
                />
                />
              </View>
            </Modal>
            <Text style={styles.infoText}>Welcome to Github Repo Search</Text>
            <Text style={styles.guideText}>
              You need to enter a Query string to get all repos that match that
              string e.g (Android animation, Kotlin, RecylerView)
            </Text>
            <Input
              placeholder="Query String"
              label="Enter Query String"
              text={text}
              onChangeText={(text) => this.handleTextChange(text)}
              rightIcon={{ type: 'material-icons', name: 'search' }}
            />
            <TouchableOpacity
              onPress={() => this.handleQuerySearch(text)}
              style={styles.submitBtn}
              disabled={text === ''}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          //TODO: uncomment lottie
          <Text>Loading</Text>
          // <LottieView
          //   ref={(animation) => {
          //     this.animation = animation
          //   }}
          //   source={require('../assests/data.json')}
          // />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
  infoText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  guideText: {
    marginTop: 20,
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  submitBtn: {
    marginTop: 20,
    backgroundColor: '#DDDDDD',
    height: 40,
    alignItems: 'center',
    padding: 10,
    color: 'white',
    width: '80%',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
})

export default QueryScreen
