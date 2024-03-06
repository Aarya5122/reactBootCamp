import TeamMember from "../components/TeamMember";
import UserContext from "../context/userContext";
function About() {
	return (
		<div>
			<div>
				<UserContext.Consumer>
					{(data) => (
						<p className="mb-20">Current user: {data.name}</p>
					)}
				</UserContext.Consumer>
			</div>
			<TeamMember name="Aarya Singh" />
		</div>
	);
}

export default About;
