import "./chats.css";
import CharacterProfile from "../../layout/CharacterProfile/CharacterProfile";
import profilesData from "../../data/ProfileData/profileData.json";

function Chats() {
	return (
		<div>
			<aside>
				<CharacterProfile profilesData={profilesData} />
			</aside>
		</div>
	);
}

export default Chats;