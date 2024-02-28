import React from "react";

class TeamMember extends React.Component {
	constructor(props) {
		super(props);

		// As this is invoked while loading this class (i.e equivalent to invoking of functional component)
		// This becomes best place to create a state variable
		this.state = {
			count: 1,
			txt: "SDF",
		};
	}

    componentDidMount(){
        console.log("Component Did Mount");
        //Make API call
    }

    componentWillUnmount(){
        // Cleaner
    }

    compo

	render() {
		const { name } = this.props;

		console.log(this);
		console.log(location);

		return (
			<div>
				<p>Count: {this.state.count}</p>
				<p>{name}</p>
				<p>CEO</p>
				<p>Nimmis kitchen</p>

				<button
					onClick={(e) => {
						e.preventDefault();
						this.setState({ count: this.state.count + 1 });
					}}
				>
					Increase count
				</button>
			</div>
		);
	}
}

export default TeamMember;
