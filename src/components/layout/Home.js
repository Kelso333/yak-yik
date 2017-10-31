import React, { Component } from 'react'
import Zones from './Zones'
import Comments from './Comments'

class Home extends Component {
  render() {
    return(

      <div className="container">
        <div className="row">

            <div className="col-md-4">
              <Zones />
            </div>

            <div class="col-md-8">
              <Comments />
            </div>

        </div> {/* end of row */}
      </div> // end of container 

    )
  }
}

export default Home 