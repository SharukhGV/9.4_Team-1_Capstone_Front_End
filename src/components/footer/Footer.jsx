import About from '../../pages/about/About';
import TermsServices from '../../pages/terms/TermsServices.jsx';
import HelpCentre from '../../pages/helpCentre/HelpCentre.jsx';
import './Footer.css';

export default function Footer() {

    return (
        <div className='footer'>
            <About />
            <TermsServices />
            <HelpCentre />   
        </div>
    )
}