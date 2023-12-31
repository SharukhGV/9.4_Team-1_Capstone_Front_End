import './About.css';
import craftBanner from '../../assets/craftLogoFlatPurple.png'
import Juan from '../../assets/members/CraftopiaTeamJuan.jpg'
import Sharukh from '../../assets/members/CraftopiaTeamSharukh.png'
import Michel from '../../assets/members/CraftopiaTeamMichel.png'
import Evan from '../../assets/members/CraftopiaTeamEvan.png'
import craftFooter from '../../assets/craftBanner.svg'

export default function About() {
  const headerStyle = {
    fontFamily: 'Bellota, sans-serif',
  };

  const bodyStyle = {
    fontFamily: 'Bellota Text, sans-serif',
  };

  return (
    <div
      className='about'
      style={{
        display: 'grid',
        alignContent: 'center',
        backgroundColor: '#f8f8f8',
      }}
    >
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      ></link>
      <br />
      <br />

      <div className='about-logo'>
        <img
          src={craftBanner}
          alt='Craftopia Logo'
          style={{ width: '85%', maxWidth: '100%' }}
          className='about-img'
        />
      </div>

      <br />
      <br />

      <div className='about-body' style={bodyStyle}>
        <h2 style={headerStyle}>About Our App</h2>
        <div className='app-description'>
          'Craftopia is inspired by the human desire for creativity and
          connection. The bar to starting a new hobby can be high due to the
          required time and money investment, we aim to lower this bar and to
          rekindle the joy of crafting and hobbies. We believe everyone has
          unique talents waiting to be explored, and we're here to break
          barriers to creativity. Craftopia fosters a supportive community where
          you can learn, create, and connect.
          <br />
          <br />
          Craftopia is a vibrant crafting community that empowers all skill
          levels. Learn from experts, buy/sell crafting gear, and connect with
          like-minded crafters. Enjoy personalized learning, access resources,
          showcase your creations, trade items, and swap skills. Craftopia is
          where hobbies become fun again. Join us and nurture your creativity
          today!'
        </div>
      </div>

      <br />

      <div className='team' style={bodyStyle}>
        <h2 style={headerStyle}>Meet the Team</h2>

        <div
          className='about-team'
          style={{ display: 'grid', alignContent: 'center' }}
        >
          <div className='card'>
            <img
              src={Juan}
              alt='Juan Feliz'
              className='team-img about-img'
            // style={{ width: '100%', maxWidth: '100%' }}
            />
            <h1>Juan Feliz</h1>
            <p className='title'>Technical Lead & Master Debugger</p>
            <p>
              Nothing better than creating fun and engaging interfaces that
              capture the attention of your viewers.
              <br />
              ...now if only we knew how to do that.
              <br />
              Oh wait that's right all it takes is practice, collaboration,
              patience, and a little more practice.
            </p>
            <div>
              <a href='https://github.com/felizj17' className='card-a'>
                <i className='fa fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/juan-feliz/'
                className='card-a'
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className='card'>
            <img
              src={Sharukh}
              alt='Sharukh Velupillai'
              className='team-img about-img'
            // style={{ width: '100%', maxWidth: '100%' }}
            />
            <h1>Sharukh Velupillai</h1>
            <p className='title'>Demo Lead & Back-End Ninja</p>
            <p>
              What motivates me to learn and push forward is to see genuine
              smiles on the faces of others.
              <br />
              Being grateful for what I have has allowed me to never give up despite adversity,
              and continue to learn new things to improve the quality of life
              for myself and those around me.
            </p>
            <div>
              <a href='https://github.com/SharukhGV' className='card-a'>
                <i className='fa fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/sharukh-velupillai-08b98b7a/'
                className='card-a'
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className='card'>
            <img
              src={Michel}
              alt='Michel Batista'
              className='team-img about-img'
            // style={{ width: '100%', maxWidth: '100%' }}
            />
            <h1>Michel Batista</h1>
            <p className='title'>Design Lead & 3am Push Champion</p>
            <p>
              I love to learn, & I love to create. These two passions have been the driving force behind my journey in programming.
              <br />
              Sometimes when envisioning a new project, one doesn’t always know how to specifically execute every single concept.
            </p>
            <div>
              <a href='https://github.com/MichelBDLC' className='card-a'>
                <i className='fa fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/michelbdlc'
                className='card-a'
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>

          <div className='card'>
            <img
              src={Evan}
              alt='Evan Velush'
              className='team-img about-img'
            />
            <h1>Evan Velush</h1>
            <p className='title'>Project Manager & CSS Wizard</p>
            <p>
              Nothing brings me more joy than appreciating the beauty of our planet and uplifting people around me.
              <br />
              My curious and altruistic nature has always fed my desire for radical disruption and improvement in our world.
            </p>
            <div>
              <a href='https://github.com/SuperNinjaEv' className='card-a'>
                <i className='fa fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/evanvelush/'
                className='card-a'
              >
                <i className='fa fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div>
        <img
          src={craftFooter}
          alt='Craft Collective'
          style={{ width: '1000px', height: 'auto', maxWidth: '100%' }}
          className='about-img'
        />
      </div>
      <br />

    </div>
  );
}
