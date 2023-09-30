import './About.css'

export default function About() {

  const headerStyle = {
    fontFamily: 'Bellota, sans-serif'
  };

  const bodyStyle = {
    fontFamily: 'Bellota Text, sans-serif'
  };

  return (
    <div
      className="about"
      style={{ display: 'grid' }}
    >
      <br />
      <div className="about-logo">
        <img
          src="src/assets/craftLogoFlatPurple.png"
          alt="Craftopia Logo"
          style={{ width: '85%', maxWidth: '100%' }}
        />
      </div>

      <div className='about-body' style={bodyStyle}>
        <h2 style={headerStyle}>About Our App</h2>
        <div className="app-description">
          'Craftopia is inspired by the human desire for creativity and connection.  The bar to starting a new hobby can be high due to the required time and money investment, we aim to lower this bar and to rekindle the joy of crafting and hobbies.  We believe everyone has unique talents waiting to be explored, and we're here to break barriers to creativity.  Craftopia fosters a supportive community where you can learn, create, and connect.
          <br />
          <br />
          Craftopia is a vibrant crafting community that empowers all skill levels.  Learn from experts, buy/sell crafting gear, and connect with like-minded crafters.  Enjoy personalized learning, access resources, showcase your creations, trade items, and swap skills.  Craftopia is where hobbies become fun again. Join us and nurture your creativity today!'
        </div>
        <br />

        <img
          src="src/assets/artistsgraphic.jpg"
          alt="Another Image"
          style={{ width: '85%', maxWidth: '100%' }}
        />
      </div>

      <div className='about-team'>
        <h2 style={headerStyle}>Meet the Team</h2>
        <img src="path_to_team_member_image_1" alt="Team Member 1" />
        <div className="team-member-description">
          Juan Feliz
        </div>
        <img src="path_to_team_member_image_2" alt="Team Member 2" />
        <div className="team-member-description">
          Sharukh Velupillai
        </div>
        <img src="path_to_team_member_image_3" alt="Team Member 3" />
        <div className="team-member-description">
          Michel Batista
        </div>
        <img src="path_to_team_member_image_4" alt="Team Member 4" />
        <div className="team-member-description">
          Evan Velush
        </div>
        <img src="path_to_another_image" alt="Another Image" />
      </div>

      <img src="path_to_another_image" alt="Another Image" />
    </div>
  );
}
