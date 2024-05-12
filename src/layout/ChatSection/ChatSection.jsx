import PromptInputBar from "../../components/PromptInputBar/PromptInputBar";
import "./ChatSection.css";

function ChatSection() {
	return (
		<div className="chatSection">
			<div className="messagesArea"> This is Chats Section</div>
			<div className="promptInputSection">
				<PromptInputBar />
			</div>
		</div>
	);
}

export default ChatSection;
