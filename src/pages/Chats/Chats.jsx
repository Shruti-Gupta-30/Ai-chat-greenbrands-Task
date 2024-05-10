import "./chats.css";
import CharacterProfile from "../../layout/CharacterProfile/CharacterProfile";
import profilesData from "../../data/ProfileData/profileData.json";

function Chats() {
	return (
		<div>
			<CharacterProfile profilesData={profilesData} />
		</div>
	);
}

export default Chats;
