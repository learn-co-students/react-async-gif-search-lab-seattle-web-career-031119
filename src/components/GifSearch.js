import React, { Component } from 'react'

class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (ev) => {
    this.setState({
      search: ev.target.value
    })
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={(ev) => this.props.handleSubmit(ev, this.state.search)}>
        <input type='text' value={this.state.search} placeholder='search'></input>
      </form>
    )
  }
}

export default GifSearch
