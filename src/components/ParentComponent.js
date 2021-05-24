import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'


class ParentComponent extends React.Component {
  state = {
    firstName: "Genry",
    lastName: "",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
     this.setState({submittedData: dataArray})
  }

  render() {
    return (
      <div>
      <Form
      handleSubmit = {this.handleSubmit}
      listOfSubmissions = {this.listOfSubmissions}
      submittedData = {this.state.submittedData}
      formData={this.state}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
      />
      <DisplayData formData={this.state} />
      </div>
    )
  }
}

export default ParentComponent;