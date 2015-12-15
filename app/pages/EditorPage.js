import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Person, flattenObject } from 'blockchain-profile'
import InputGroup from '../components/InputGroup'
import { SaveButton } from '../components/Buttons'

export default class EditorPage extends Component {
  constructor() {
    super()
    this.state = {
      flatProfile: {},
      profileJustSaved: false,
      verifications: []
    }
  }

  componentDidMount() {
  }

  saveProfile() {
  }

  onValueChange(event) {
    var flatProfile = this.state.flatProfile
    flatProfile[event.target.name] = event.target.value
    this.setState({flatProfile: flatProfile})
  }

  render() {
    var flatProfile = this.state.flatProfile
    return (
      <div>
          { flatProfile ? (
          <div>
              <h1>Edit Profile</h1>

              <hr />
              <h3>Basic Information</h3>
              <InputGroup name="givenName" label="First Name"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="familyName" label="Last Name"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="description" label="Short Bio"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="image[0].contentUrl" label="Profile Image URL"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="website[0].url" label="Website"
                  data={flatProfile} onChange={this.onValueChange} />
              <div className="form-group">
                  <SaveButton onSave={this.saveProfile} />
              </div>

              <hr />
              <h3>Accounts</h3>
              <InputGroup name="account[0].identifier" label="Twitter Username"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="account[0].proofUrl" label="Twitter Proof URL"
                  data={flatProfile} onChange={this.onValueChange} />                
              <InputGroup name="account[1].identifier" label="Facebook Username"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="account[1].proofUrl" label="Facebook Proof URL"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="account[2].identifier" label="GitHub Username"
                  data={flatProfile} onChange={this.onValueChange} />
              <InputGroup name="account[2].proofUrl" label="GitHub Proof URL"
                  data={flatProfile} onChange={this.onValueChange} />
              <div className="form-group">
                  <SaveButton onSave={this.saveProfile} />
              </div>
          </div>
          ) : null }
      </div>
    );
  }
}
