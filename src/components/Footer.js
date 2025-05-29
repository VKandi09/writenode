import{ Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} <Link to='/'>WordNode</Link>. All Rights Reserved.</p>
    </footer>
  )
}
