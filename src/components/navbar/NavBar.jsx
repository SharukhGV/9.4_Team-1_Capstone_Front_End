import './navbar.css'
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

import Auth from '../../components/auth/Auth';


export default function NavBar() {

    function handleLoginClick() {
        console.log('Login button clicked');
    }

    function handleSignUpClick() {
        console.log('Sign Up button clicked');
    }

    return (
        <div className='navbar'>
            <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />

            <input type="text" placeholder="Search..." />

            <Auth craftopiaLogo={craftopiaLogo} />

        </div>
    )
}