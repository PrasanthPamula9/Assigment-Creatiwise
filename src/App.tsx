
import Navbar from './components/NavBar';
import Banner from './components/Banner'
import Expertise from './components/Experties'
import CardComponent from './components/CardComponent'
import Experience from './components/Experience'
import BlongPage from './components/BlongPage'
import WhatTheySay from './components/WhatTheySay'
import QATab from './components/QATab'
import Footer from './components/Footer'

function App() {

  return (
    <div style={{
      backgroundColor: 'black'

    }}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Expertise></Expertise>

      <CardComponent />
      <Experience></Experience>
      <BlongPage></BlongPage>
      <WhatTheySay></WhatTheySay>
      <QATab></QATab>
      <Footer></Footer>

    </div>
  );
}
export default App
