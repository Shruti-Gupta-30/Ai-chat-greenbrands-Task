import "./PromptInputBar.css";
import { PaperPlaneTilt } from "@phosphor-icons/react";

function PromptInputBar() {
	return (
		<div className="promptInputBar">
			<div className="toggleSwitch">
				<span className="switchName"> text</span>
				<input type="checkbox" name="checkbox" id="toggle" />
				<label for="toggle" className="switch"></label>
			</div>
			<textarea
				rows={1}
				className="promptInputArea"
				placeholder="Type a message here..."
			></textarea>
			<span className="sendButton">
				<PaperPlaneTilt className="icon" weight="fill" />
			</span>
		</div>
	);
}

export default PromptInputBar;
