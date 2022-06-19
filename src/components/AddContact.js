import React from "react";

class AddContact extends React.Component {
	state = {name: "",email: ""};

	add = (e) => {
		e.preventDefault();
		if(this.state.name === "" || this.state.email === ""){
		 alert("All fields are necassary");
		 return;
		}
		this.props.addContactHandler(this.state);
		this.setState({name: "",email: ""});
	}

	render() {
		return (
		<div className="ui main">
			<h2>Add Contact</h2>
			<form className="ui form" autoComplete="off" onSubmit={this.add}>
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" value={this.state.name} placeholder="name" onChange={(e) => this.setState({name: e.target.value})}></input>
				</div>
				<div className="field">
					<label>Email</label>
					<input type="text" name="email" value={this.state.email} placeholder="Email" onChange={(e) => this.setState({email: e.target.value})} />
				</div>
				<button className="ui button blue">Add</button>
			</form>
		</div>
	  );
	}
}

export default AddContact;