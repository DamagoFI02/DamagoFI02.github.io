import  { Link } from 'react-router-dom';


function Navigation() {
    return (
      <header className='relative'>
        <nav className='absolute top-5 right-5'>

          <ul >
                <li className='float-left mr-5'><Link to="/">Home</Link></li>
                <li className='float-left  mr-5'><Link to="/mail">Mail</Link></li>
            </ul>


        </nav>
      </header>
    );
  }

  export default Navigation;
