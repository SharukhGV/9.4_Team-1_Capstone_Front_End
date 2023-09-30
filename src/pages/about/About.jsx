import './About.css'

export default function About() {
  return (
    <div className="about">
      <br />
      <div className="about-logo">
        <img src="src/assets/craftLogoFlatPurple.png" alt="Craftopia Logo" />
      </div>
      <h2>About our App</h2>
      <div className="app-description">
        {/* Description of your app */}
      </div>
      <img src="path_to_another_image" alt="Another Image" />
      <h2>Meet the Team</h2>
      <img src="path_to_team_member_image_1" alt="Team Member 1" />
      <div className="team-member-description">
        {/* Description of team member #1 */}
      </div>
      <img src="path_to_team_member_image_2" alt="Team Member 2" />
      <div className="team-member-description">
        {/* Description of team member #2 */}
      </div>
      <img src="path_to_team_member_image_3" alt="Team Member 3" />
      <div className="team-member-description">
        {/* Description of team member #3 */}
      </div>
      <img src="path_to_team_member_image_4" alt="Team Member 4" />
      <div className="team-member-description">
        {/* Description of team member #4 */}
      </div>
      <img src="path_to_another_image" alt="Another Image" />
      <img src="path_to_another_image" alt="Another Image" />
    </div>
  );
}
