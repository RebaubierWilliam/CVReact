import React, { Component } from 'react'
import './Portrait.scss';

export default class Portrait extends Component {
  render() {
    return (
      <div className='portrait__conteneur'>
          <img className='portrait__conteneur__photo' src='../images/ma photo.png' alt='' />
          <div className='portrait__conteneur__name'>
              <div>
                WILLIAM
              </div>
              <div>
                REBAUBIER
              </div>
              <div>dev sénior</div>
          </div>
      </div>
    )
  }
}
