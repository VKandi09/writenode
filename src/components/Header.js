import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { auth, provider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

export const Header = () => {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState( JSON.parse(localStorage.getItem("isAuth")) || false);

    function handleLogin(){
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
        })
    }

    function handleLogout(){
        signOut(auth);
        setIsAuth(false);
        localStorage.setItem("isAuth", false);
        navigate('/');
    }

  return (
    <header>
        <Link to='/' className='logo'>
            <img src={Logo} alt='WordNode logo'></img>
            <span>WordNode</span>
        </Link>
        <nav className='nav'>
            <NavLink to='/' className='link'>Home</NavLink>
            { isAuth ? (
                <>
                    <NavLink to='create' className='link'>Create</NavLink>
                    <button onClick={handleLogout} className='auth'><i className="bi bi-box-arrow-right"></i> Logout</button>
                </>
            ) : (
                <button onClick={handleLogin} className='auth'><i className="bi bi-google"></i> Login</button>
            )}
        </nav>
    </header>
  )
}
