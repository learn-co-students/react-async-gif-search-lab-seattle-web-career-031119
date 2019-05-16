import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      gifs: [],
    }
    this.setFilter = this.setFilter.bind(this)
  }


  setFilter(ev){
    ev.preventDefault()
    let search = ev.target.elements['searchTerm'].value
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=IqcZ1KKoi1AxRa430nCZKjtZZCiJnxQ7&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }


  render(){
    return <div>
      <GifSearch setFilter={this.setFilter} />
      <GifList  gifs={this.state.gifs} />
    </div>


  }
}
