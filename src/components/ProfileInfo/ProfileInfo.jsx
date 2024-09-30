import "./profileInfo.css";
import { NotePencil } from "@phosphor-icons/react";

function ProfileInfo({ profileData }) {
	// Getting character Info from json file. It can be extended to have more characters
	return (
		<div className="profileInfoCard">
			<div className="whoIam">
				<h4 className="sectionHeading">Who I Am</h4>
				<div
					className="trait
                "
				>
					<h5>
						{" "}
						Personality{" "}
						<span className="traitInfo">{profileData.personality}</span>
					</h5>
				</div>
				<div
					className="trait
                "
				>
					<h5>
						{" "}
						Work <span className="traitInfo">{profileData.work}</span>
					</h5>
				</div>
				<div
					className="trait
                "
				>
					<h5>
						{" "}
						Hobbies <span className="traitInfo">{profileData.hobbies}</span>
					</h5>
				</div>
				<div
					className="trait
                "
				>
					<h5>
						{" "}
						Relationship{" "}
						<span className="traitInfo">{profileData.relationship}</span>
					</h5>
				</div>
			</div>
			<div className="about">
				<h4 className="sectionHeading">
					{" "}
					About Me <NotePencil className="icon" weight="fill" />
				</h4>
				<p className="aboutInfo">{profileData.about}</p>
			</div>
		</div>
	);
}

export default ProfileInfo;
