import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/Sidebar/SideBar';
import NavBar from './components/navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';


function App() {

  const [sideBarOpened, setSideBarOpened] = useState(false);

  return (
    <>
      <div className='d-flex'>
        <SideBar opened={sideBarOpened} />
        <div className=' flex-grow-1 bg-warning'>
          <NavBar onHamburgerClick={() => {
            setSideBarOpened(!sideBarOpened);
          }} />
          <main>
            <Container>
              <Home />
            </Container>

          </main>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
