import React from "react";
import user from '../images/images.png';

const ContactCard = (props) => {
	const {id,name,email} = props.contact;
	return (
		<div className="item">
			<img className="ui avatar image" src={user} alt="user"/>
			<div className="content">
				<div className="header">{name}</div>
					<div>{email}</div>
				</div>
			<i className="ui red trash outline alternate icon"
			onClick={() => props.clickHandler(id)}>
			</i>
			<i className="grey edit outline icon"></i>
		</div>
	);
};

export default ContactCard;