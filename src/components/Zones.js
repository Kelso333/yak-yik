import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component {
  render() {
    return (

      <div>

        <ol>
          <li>
            <Zone name="Zone 1"/>
            <Zone name="Zone 2"/>
            <Zone name="Zone 3"/>
            <Zone name="Zone 4"/>
          </li>
        </ol>

      </div>

    )
  }
}

export default Zones