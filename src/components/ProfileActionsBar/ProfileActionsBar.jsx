import "./ProfileActionsBar.css";
import {
	Camera,
	ChatCircle,
	LockSimple,
	ShareNetwork,
} from "@phosphor-icons/react";

function ProfileActionsBar() {
	return (
		<div className="actionsBar">
			<div className="actions">
				<Camera className="icon" weight="fill" />{" "}
				<span className="actionInfo">0</span>
				<ChatCircle className="icon" weight="fill" />
				<span className="actionInfo">6</span>
			</div>
			<div className="share">
				<LockSimple className="icon gray" weight="fill" />
				<span className="actionInfo">Make Character Public</span>
				<ShareNetwork className="icon" weight="fill" />
			</div>
		</div>
	);
}

export default ProfileActionsBar;
