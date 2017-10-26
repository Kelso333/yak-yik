import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component {
  constructor() {
    super() =
      this.state
    
  }
  render() {

    const firstZone = { name:'Zone 1', zipCode: '10012', numComments: 10 }
    const secondZone = { name:'Zone 2', zipCode: '10013', numComments: 20 }
    const thirdZone = { name:'Zone 3', zipCode: '10014', numComments: 30 }
    const fourthZone = { name:'Zone 4', zipCode: '10015', numComments: 40 }

    return (

      <div>

        <ol>
          <li><Zone zone={firstZone} /></li>
          <li><Zone zone={secondZone} /></li>
          <li><Zone zone={thirdZone} /></li>
          <li><Zone zone={fourthZone} /></li>
        </ol>

      </div>

    )
  }
}

export default Zones