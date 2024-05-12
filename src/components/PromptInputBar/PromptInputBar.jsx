import "./PromptInputBar.css";
import { PaperPlaneTilt } from "@phosphor-icons/react";

function PromptInputBar() {
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
				></textarea>
				<span className="sendButton">
					<PaperPlaneTilt className="icon" weight="fill" />
				</span>
			</div>
		</div>
	);
}

export default PromptInputBar;
