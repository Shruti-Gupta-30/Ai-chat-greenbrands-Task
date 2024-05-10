import ProfileSettingsBar from "../../components/ProfileSettingsBar/ProfileSettingsBar";
import "./characterProfile.css";

function CharacterProfile({ profilesData }) {
	return (
		<div className="profileCard">
			{profilesData &&
				profilesData.map((profileData) => {
					console.log(profileData);
					return (
						<div className="profileCard" key={profileData.id}>
							<figure>
								<ProfileSettingsBar />
								<img
									src={profileData.photoURL}
									alt={profileData.description}
									height={400}
								/>
								<figcaption className="name&id">
									<h2>
										{profileData.name}
										<span>{profileData.id}</span>
									</h2>
								</figcaption>
							</figure>
						</div>
					);
				})}
		</div>
	);
}

export default CharacterProfile;
