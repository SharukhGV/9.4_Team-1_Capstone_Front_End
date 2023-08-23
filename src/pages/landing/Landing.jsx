import './landing.css';
import Auth from '../../components/auth/Auth';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

export default function Landing() {

    return (
        <>
        <Auth craftopiaLogo={craftopiaLogo} />
        <header>
        <div className='header-branding'>
        <img className='home-logo' src={craftopiaLogo} alt='craftopia logo' />
        <h2 className='header-h2'> Ignite Your Creativity, Equip Your Creativity </h2>
        <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
        <br />
        <img src={ArtistsGraphic} className='artists-graphic' />
        </div>
        <br />
        <div className='header-points'>
          <div className='point-column'>
            <p> Discover a vast collection of high-quality gear & equipment tailored to your creative interests</p>
            <p> Cultivate your skills & creativity by leveraging the diverse range of tools & resources available</p>
          </div>
          <div className='point-column'>
            <p> Connect with fellow hobbyists & enthusiasts who share your passion & expertise</p>
            <p> Enhance your artistic journey by exchanging ideas, tips, & experience with a supportive community</p>
          </div>
        </div>
        </header>
        <main>
            <div>
                {/* carousel goes here */}
            </div>
            {/* <h3> Top Categories </h3> */}
            <div>
                {/* top categories here */}
            </div>
        </main>
        </> 
    )
}