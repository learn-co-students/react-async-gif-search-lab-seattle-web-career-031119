import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q='
const GIPHY_TWO = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {

  constructor(){
    super()
    this.state = {
      gifs: []
    }
  }

  handleSubmit = (ev, search) => {
    ev.preventDefault()
    ev.persist()
    console.log(search)
    this.setState({
      gifs: [search, 'blah', 'blah']
    })

    // ev.preventDefault()
    // ev.persist()
    // fetch(GIPHY_URL + search + GIPHY_TWO)
    //   .then(resp => resp.json())
    //   .then(json => {
    //     this.setState({
    //       gifs: json.data.slice(0, 3)
    //     })
    //   })
  }

  render(){
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default GifListContainer
