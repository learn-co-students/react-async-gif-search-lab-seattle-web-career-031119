import React, { Component } from 'react'

class GifList extends Component {


  //       <li key={gif.id}>
  //         <img src={gif.images.original.url}>
  //       </li>

  render() {
    return (
      <ul>
      {this.props.gifs.map( (gif, idx) => {
        return <li key={idx}> {gif} </li>
      }


      )}
      </ul>
    )
  }

}

export default GifList
