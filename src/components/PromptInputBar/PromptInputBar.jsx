import { useState } from "react";
import "./PromptInputBar.css";
import { PaperPlaneTilt } from "@phosphor-icons/react";

function PromptInputBar({ handleSubmit }) {
	const [prompt, setPrompt] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setPrompt(e.target.value);
	};

	return (
		<div className="promptInputBar">
			<div className="toggleSwitch">
				<span className="switchName"> text</span>
				<input type="checkbox" name="checkbox" id="toggle" />
				<label htmlFor="toggle" className="switch"></label>
			</div>
			<div className="inputBar">
				<textarea
					rows={1}
					className="promptInputArea"
					placeholder="Type a message here..."
					onChange={handleChange}
				></textarea>
				<span className="sendButton" onClick={() => handleSubmit(prompt)}>
					<PaperPlaneTilt className="icon" weight="fill" />
				</span>
			</div>
		</div>
	);
}

export default PromptInputBar;
