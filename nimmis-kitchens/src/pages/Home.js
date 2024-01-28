import RestroCard from "../components/RestroCard"
import Search from "../components/Search"

const Home = () => {
    return (
		<div>
			<Search />
			<div className="restroContainer flex spaceAround gap-15">
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
				<RestroCard />
			</div>
		</div>
	);
}

export default Home;