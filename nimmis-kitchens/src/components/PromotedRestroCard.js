function PromotedRestroCard(RestroCard) {
	return (props) => {
		return (
			<div>
				<label className="promoted">Promoted</label>
				<RestroCard {...props} />
			</div>
		);
	};
}
export default PromotedRestroCard;
