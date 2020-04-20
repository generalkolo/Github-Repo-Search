import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import RepoCard from './RepoCard'
import { keyExtractor } from '../utils/helpers'

class RepoList extends Component {
  renderItem = ({ item }) => {
    const { handleItemClick } = this.props
    return (
      <RepoCard
        item={item}
        key={keyExtractor(item)}
        handleItemClick={handleItemClick}
      />
    )
  }

  render() {
    const { items } = this.props
    return <FlatList data={items} renderItem={this.renderItem} />
  }
}

export default RepoList
