import React, { Component } from 'react'

export default class GifList extends Component {

  gifPainter(){
    console.log(this.props.gifs)
    return this.props.gifs.map(gif => {
      return <img key={gif.id} src={gif.images.original.url} alt="a gif"/>
    })
  }

  render(){
    return <div>
      {this.gifPainter()}
    </div>
  }
}
