import React, { Component } from 'react'
import './Portrait.scss';

export default class Portrait extends Component {
  render() {
    return (
      <div className='portrait__conteneur'>
          <img className='portrait__conteneur__photo' src='../images/ma photo.png' alt='' />
          <h2>William Rebaubier</h2>
      </div>
    )
  }
}
