import './About.css'
import { Link } from 'react-router-dom';

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
      style={{ display: 'grid', alignContent: 'center', backgroundColor: '#f8f8f8' }}
    >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <br />

      <div className='about-body' style={bodyStyle}>
        <h2 style={headerStyle}>About Our App</h2>
        <div className="app-description">
          'Craftopia is inspired by the human desire for creativity and connection.  The bar to starting a new hobby can be high due to the required time and money investment, we aim to lower this bar and to rekindle the joy of crafting and hobbies.  We believe everyone has unique talents waiting to be explored, and we're here to break barriers to creativity.  Craftopia fosters a supportive community where you can learn, create, and connect.
          <br />
          <br />
          Craftopia is a vibrant crafting community that empowers all skill levels.  Learn from experts, buy/sell crafting gear, and connect with like-minded crafters.  Enjoy personalized learning, access resources, showcase your creations, trade items, and swap skills.  Craftopia is where hobbies become fun again. Join us and nurture your creativity today!'
        </div>
      </div>

      <br />

      <div className="about-logo">
        <img
          src="src/assets/craftLogoFlatPurple.png"
          alt="Craftopia Logo"
          style={{ width: '85%', maxWidth: '100%' }}
        />
      </div>
      {/* <img
        src="src/assets/artistsgraphic.jpg"
        alt="Craft Collective"
        style={{ width: '85%', maxWidth: '100%' }}
      /> */}
      <div
        className='team'
        style={bodyStyle}
      >
        <h2 style={headerStyle}>Meet the Team</h2>
        <div
          className='about-team'
          style={{ display: 'grid', alignContent: 'center' }}
        >

          <div className="card">
            <img
              src="src/assets/CraftopiaTeamJuan.jpg"
              alt="Juan Feliz"
              className='team-img'
              style={{ width: '100%', maxWidth: '100%' }} 
              />
            <h1>Juan Feliz</h1>
            <p className="title">Technical Lead</p>
            <p>PERSONAL DESCRIP HERE</p>
            <a href="https://github.com/felizj17"><i className="fa fa-github"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>

          <div className='member'>
            <div className="team-member-description">
              Juan Feliz
            </div>
            <Link to={'https://github.com/felizj17'}>
              <img
                src="src/assets/CraftopiaTeamJuan.jpg"
                alt="Team Member Juan Feliz"
                className='team-img'
                style={{ width: '80%', maxWidth: '100%' }} />
            </Link>
          </div>

          <div className='member'>
            <div className="team-member-description">
              Sharukh Velupillai
            </div>
            <Link to={'https://github.com/SharukhGV'}>
              <img
                src="src/assets/CraftopiaTeamSharukh.png"
                alt="Team Member Sharukh Velupillai"
                className='team-img'
                style={{ width: '80%', maxWidth: '100%' }} />
            </Link>
          </div>

          <div className='member'>
            <div className="team-member-description">
              Michel Batista
            </div>
            <Link to={'https://github.com/MichelBDLC'}>
              <img
                src="src/assets/CraftopiaTeamMichel.png"
                alt="Team Member Michel Batista"
                className='team-img'
                style={{ width: '80%', maxWidth: '100%' }} />
            </Link>
          </div>

          <div className='member'>
            <div className="team-member-description">
              Evan Velush
            </div>
            <Link to={'https://github.com/SuperNinjaEv'}>
              <img
                src="src/assets/CraftopiaTeamEvan.png"
                alt="Team Member Evan Velush"
                className='team-img'
                style={{ width: '80%', maxWidth: '100%' }} />
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
}
