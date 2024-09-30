import MyAvatarPhoto from "../../assets/images/MyAvatarPhoto.jpg";

function ChatMessage({ message, profileData }) {
	return (
		<div className={`chatMessage ${message.sender === "AI" && "AI"}`}>
			<div className="avatar">
				{message.sender === "AI" ? (
					<div>
						<span className="avatarName"></span>
						<img
							src={profileData.photoURL}
							alt="avatar"
							className="avatarImage"
						/>
					</div>
				) : (
					<div>
						<span className="avatarName">Cutie</span>
						<img src={MyAvatarPhoto} alt="Avatar" className="avatarImage" />
					</div>
				)}
			</div>
			<div className="message">{message.message}</div>
		</div>
	);
}

export default ChatMessage;
