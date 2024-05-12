import { useRef, useState } from "react";
import "./PromptInputBar.css";
import { PaperPlaneTilt } from "@phosphor-icons/react";

function PromptInputBar({ handleSubmit }) {
	const [prompt, setPrompt] = useState("");
	const resetPrompt = useRef("");

	const handleChange = (e) => {
		e.preventDefault();
		setPrompt(e.target.value);
	};

	//Using useRef hooko to clear the input field on form submission while retaining the prompt value to pass on to another component
	const resetTextArea = (e) => {
		e.preventDefault();
		resetPrompt.current.value = "";
	};

	return (
		<div className="promptInputBar">
			<div className="toggleSwitch">
				<span className="switchName"> text</span>
				<input type="checkbox" name="checkbox" id="toggle" />
				<label htmlFor="toggle" className="switch"></label>
			</div>
			<div className="inputBar">
				<form onSubmit={resetTextArea}>
					<input
						type="text"
						ref={resetPrompt}
						rows={1}
						className="promptInputArea"
						placeholder="Type a message here..."
						onChange={handleChange}
					/>
					<button className="sendButton" onClick={() => handleSubmit(prompt)}>
						<PaperPlaneTilt className="icon" weight="fill" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default PromptInputBar;
