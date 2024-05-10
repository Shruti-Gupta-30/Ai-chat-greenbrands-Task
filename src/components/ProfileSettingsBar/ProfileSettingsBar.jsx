import "./profileSettingsBar.css";
import {
	CaretLeft,
	DotsThreeOutlineVertical,
	Wrench,
	Stool,
	NotePencil,
	X,
} from "@phosphor-icons/react";

function ProfileSettingsBar() {
	return (
		<div className="profileNav">
			<div className="chatNotifs">
				<CaretLeft className="icon" />
				<h4>Chats img:3 msg:</h4>
			</div>
			<div className="profileSettings">
				<DotsThreeOutlineVertical className="icon" weight="fill" />
				<Wrench className="icon" weight="fill" />
				<Stool className="icon" />
				<NotePencil className="icon" weight="fill" />
				<X className="icon" />
			</div>
		</div>
	);
}

export default ProfileSettingsBar;
