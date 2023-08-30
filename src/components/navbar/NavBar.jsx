import './navbar.css'
import Logo from '../../assets/Craftopia-Circular-Logo.svg';

export default function NavBar() {

    handleLoginClick = () => {
        console.log('Login button clicked');
      }
    
      handleSignUpClick = () => {
        console.log('Sign Up button clicked');
      }

    return (
        <div className='navbar'>
        <img src={Logo} alt='circ-logo' className='navbar-logo' />

        <input type="text" placeholder="Search..." />

        <button onClick={this.handleLoginClick}>Login</button>
        <button onClick={this.handleSignUpClick}>Sign Up</button>
        </div>
    )
}