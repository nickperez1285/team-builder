import React, { useState } from "react";


const Form = props =>{
	const [member, setMember] = useState({
		name:"", 
		email:"", 
		role: ""
	})
	const handleChanges=event => {
		setMember({...member, [event.target.name]: event.target.value})
	}
	const submitForm=event => {
		event.pventDefault();
		props.addMember(member);
		setMember({name:"", email:"", role:"" })
	}


	return(
		<form onSubmit={submitForm}>
			<label htmlFor="name"> Name</label>
			<input
				type="text"
				placeholder = {`Enter ${Date.now()}`}
				id= "name"
				name ="name"
				value = {member.name}
				onChange = {handleChanges}
			/>	<br/>
		<label htmlFor="email">Email</label>

			<input
				type="text"
				placeholder = {"Enter Email"}
				id= "email"
				name ="email"
				value = {member.email}
				onChange = {handleChanges}
			/>	<br/>
			<label htmlFor="email">Role</label>

			<input
				type="text"
				placeholder = {"Enter role"}
				id= "Role"
				name ="role"
				value = {member.role}
				onChange = {handleChanges}
			/>
			<button type = "submit"> Add Member </button> 
		</form>



		)

}

export default Form