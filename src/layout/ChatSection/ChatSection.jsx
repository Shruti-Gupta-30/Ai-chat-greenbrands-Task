import PromptInputBar from "../../components/PromptInputBar/PromptInputBar";
import MyAvatarPhoto from "../../assets/images/MyAvatarPhoto.jpg";
import "./ChatSection.css";
import { useState } from "react";
import BASE_URL from "../../config/config";

const API_KEY =
	"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";
function ChatSection({ profilesData }) {
	const profileData = profilesData[0];

	const [messages, setMessages] = useState([
		{
			message: "Hello, I am Jessica",
			sender: "AI",
		},
	]);

	const handleSubmit = async (message) => {
		const newMessage = {
			message,
			sender: "user",
		};
		//Old Messages+new Message i.e. Message log
		const newMessages = [...messages, newMessage];

		//Updating the message state
		setMessages(newMessages);

		//processing message to AI
		await processMessageToAI(newMessages);
	};

	async function processMessageToAI(chatMessages) {
		let apiMessages = chatMessages.map((messageObject) => {
			let role = "";
			if (messageObject.sender === "AI") {
				role = "character";
			} else {
				role = "user";
			}
			return { role: role, content: messageObject.message };
		});

		// //role:"user",role:"AI",role:"system"
		const systemMessage = {
			role: "system",
			content: `Imagine you're a ${profilesData[0].about}.`,
		};

		await fetch("https://openrouter.ai/api/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "gryphe/mythomist-7b:free",
				messages: [systemMessage, ...apiMessages],
			}),
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				setMessages([
					...chatMessages,
					{
						message: data.choices[0].message.content,
						sender: "AI",
					},
				]);
			});
		// });
	}

	return (
		<div className="chatSection">
			<div className="chatLog">
				{messages.map((message, i) => {
					return message.sender === "AI" ? (
						<div className="chatMessage AI" key={i}>
							<div className="avatar">
								<span className="avatarName">
									{profileData.name.split(" ")[0]}
								</span>
								<img
									src={profileData.photoURL}
									alt="Avatar"
									className="avatarImage"
								/>
							</div>
							<div className="message">{message.message}</div>
						</div>
					) : (
						<div className="chatMessage" key={i}>
							<div className="avatar">
								<span className="avatarName">Cutie</span>
								<img src={MyAvatarPhoto} alt="Avatar" className="avatarImage" />
							</div>
							<div className="message">{message.message}</div>
						</div>
					);
				})}
			</div>
			<div className="promptInputSection">
				<PromptInputBar handleSubmit={handleSubmit} />
			</div>
		</div>
	);
}

export default ChatSection;
