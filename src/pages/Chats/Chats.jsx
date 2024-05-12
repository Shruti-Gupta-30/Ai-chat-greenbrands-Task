import "./chats.css";
import CharacterProfile from "../../layout/CharacterProfile/CharacterProfile";
import profilesData from "../../data/ProfileData/profileData.json";
import ChatSection from "../../layout/ChatSection/ChatSection";

function Chats() {
	return (
		<div className="chatsArea">
			<aside className="characterProfileArea">
				<CharacterProfile profilesData={profilesData} />
			</aside>
			<section className="chatSection">
				<ChatSection />
			</section>
		</div>
	);
}

export default Chats;
