import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender}'♀' OR '♂'
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.pet.age}</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted}
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
