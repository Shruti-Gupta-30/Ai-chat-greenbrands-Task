import PromptInputBar from "../../components/PromptInputBar/PromptInputBar";
import MyAvatarPhoto from "../../assets/images/MyAvatarPhoto.jpg";
import "./ChatSection.css";

function ChatSection({ profilesData }) {
	const profileData = profilesData[0];
	console.log(profileData);
	return (
		<div className="chatSection">
			<div className="chatLog">
				<div className="chatMessage">
					<div className="avatar">
						<span className="avatarName">Cutie</span>
						<img src={MyAvatarPhoto} alt="Avatar" className="avatarImage" />
					</div>
					<div className="message">How's you?</div>
				</div>
				<div className="chatMessage AI">
					<div className="avatar">
						<span className="avatarName">{profileData.name.split(" ")[0]}</span>
						<img
							src={profileData.photoURL}
							alt="Avatar"
							className="avatarImage"
						/>
					</div>
					<div className="message">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						numquam atque ratione laborum dolorum repudiandae aut est. Eligendi
						ipsa corrupti optio, aperiam incidunt accusantium rerum fugiat
						quibusdam velit adipisci accusamus.
					</div>
				</div>
			</div>
			<div className="promptInputSection">
				<PromptInputBar />
			</div>
		</div>
	);
}

export default ChatSection;
