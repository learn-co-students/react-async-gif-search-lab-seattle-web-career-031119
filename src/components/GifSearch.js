import React, { Component } from 'react'

export default class GifSearch extends Component {

  render(){
    return <form onSubmit={this.props.setFilter}>
      <input type="text" name="searchTerm"/>
      <input type="submit"/>
    </form>
  }
}
