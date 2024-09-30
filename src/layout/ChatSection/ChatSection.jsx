import PromptInputBar from "../../components/PromptInputBar/PromptInputBar";

import "./ChatSection.css";
import { useState } from "react";
import { BASE_URL } from "../../config/config";
import ChatMessage from "../../components/ChatMessage/ChatMessage";

function ChatSection({ profilesData }) {
	const profileData = profilesData[0];
	const [messages, setMessages] = useState([
		{
			message: "Hello, I am Jessica",
			sender: "AI",
		},
	]);

	const handleSubmit = async (newMessages) => {
		// const newMessage = {
		// 	message,
		// 	sender: "user",
		// };
		// //Old Messages+new Message i.e. Message log
		// const newMessages = [...messages, newMessage];

		// //Updating the message state
		// setMessages(newMessages);

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

		await fetch(BASE_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
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
	}

	return (
		<div className="chatSection">
			<div className="chatLog">
				{messages.map((message, i) => {
					return (
						<ChatMessage message={message} profileData={profileData} key={i} />
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
