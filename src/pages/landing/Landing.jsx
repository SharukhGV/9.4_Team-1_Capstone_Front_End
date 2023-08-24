import './landing.css';
import Auth from '../../components/auth/Auth';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import Slider from 'react-slick';
import ceramicsImg from '../../assets/categoryImg/ceramicsImg.jpg';

export default function Landing() {

  const artsCarouselItems = [
    { name: 'Visual Arts', imageUrl: '' },
    { name: 'Ceramics', imageUrl: '' },
    { name: 'Photography', imageUrl: '' },
    { name: 'Painting', imageUrl: '' },
    { name: 'Graffiti', imageUrl: '' },
    { name: 'Filmmaking', imageUrl: '' },
    { name: 'Fashion Design', imageUrl: '' },
    { name: 'Drawing', imageUrl: '' },
    { name: 'Digital Art', imageUrl: '' },
    { name: 'Sculpture', imageUrl: '' },
    { name: 'Printmaking', imageUrl: ''},
  ]

    return (
        <>
        <Auth craftopiaLogo={craftopiaLogo} />
        <header>
        <div className='header-branding'>
        <img className='home-logo' src={craftopiaLogo} alt='craftopia logo' />
        <br />
        <div className='landing-action'>
          <div className='branding-text'>
          <h2 className='header-h2'> Ignite Your Creativity </h2>
          <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
          <button className='join-btn'> Join The Fun </button>
          </div>
          <div>
          <img src={ArtistsGraphic} className='artists-graphic' />
          </div>
        </div>
        <br />
        </div>
        <br />
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