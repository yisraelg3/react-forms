import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // listOfSubmissions = () => {
  //   return this.props.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
    //let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    // let formData = {firstName: this.props.firstName, lastName: this.props.lastName}
    // let dataArray = this.props.submittedData.concat(formData)
    // this.props.handleSubmit(dataArray)
    // this.setState({submittedData: dataArray})
    // this.sendFormDataSomewhere(formData)
  //}

  render() {
    //console.log(this.props.submittedData)
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
          <input type='submit'/>
        </form>
        {this.props.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;