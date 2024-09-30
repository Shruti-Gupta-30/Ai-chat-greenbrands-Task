import { useState } from "react";
import "./PromptInputBar.css";
import { PaperPlaneTilt } from "@phosphor-icons/react";

function PromptInputBar({ handleSubmit }) {
	const [chatLog, setChatLog] = useState([]);
	const [input, setInput] = useState("");

	async function resetTextArea(e) {
		e.preventDefault();
		setChatLog([
			...chatLog,
			{
				message: `${input}`,
				sender: "user",
			},
		]);
		setInput("");
	}

	return (
		<div className="promptInputBar">
			<div className="toggleSwitch">
				<span className="switchName"> text</span>
				<input type="checkbox" name="checkbox" id="toggle" />
				<label htmlFor="toggle" className="switch"></label>
			</div>
			<div className="inputBar">
				<form onSubmit={(e) => resetTextArea(e)}>
					<input
						// ref={resetPrompt}
						value={input}
						rows={1}
						className="promptInputArea"
						placeholder="Type a message here..."
						onChange={(e) => setInput(e.target.value)}
					/>
					<button className="sendButton" onClick={() => handleSubmit(chatLog)}>
						<PaperPlaneTilt className="icon" weight="fill" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default PromptInputBar;
