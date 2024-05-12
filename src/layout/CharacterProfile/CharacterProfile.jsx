import ProfileActionsBar from "../../components/ProfileActionsBar/ProfileActionsBar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfileSettingsBar from "../../components/ProfileSettingsBar/ProfileSettingsBar";
import "./characterProfile.css";

function CharacterProfile({ profilesData }) {
	return (
		<div className="profileCards">
			{profilesData &&
				profilesData.map((profileData) => {
					return (
						<div className="profileCard" key={profileData.id}>
							<div className="cardPhoto">
								<figure>
									<ProfileSettingsBar />
									<img
										src={profileData.photoURL}
										alt={profileData.description}
										height={400}
									/>
									<figcaption className="nameId">
										<span className="profileName">{profileData.name}</span>
										<span
											className="profileId"
											style={{ display: "block", fontSize: ".8 rem" }}
										>
											{profileData.id}
										</span>
									</figcaption>
								</figure>
							</div>
							<div className="cardInfo">
								<ProfileActionsBar />

								<ProfileInfo profileData={profileData} />
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default CharacterProfile;
