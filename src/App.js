import logo from './logo.svg';
import './New.css';
// import Header from './Header';
// import Headerbody from './Headerbody';
// import Home from './Home';
// // import Imageslider from './Imageslider'; 
// import Fragementnote from './Fragementnote';
// import Eventhandler from './Eventhandler';
// import Arraylist from './Arraylist';
// import Form from './Formsec';
// import Footer from './Footer';
import Newheader from './Newheader';
import Banner from './Banner';
import FirstBodySec from './FirstBodySec';
import Secondbodysec from './Secondbodysec';
// import Thirdbodysec from './Thirdbodysec';
import Newfooter from './Newfooter';

function App() {
  const sectionBodies = [
    { image: 'icon-1.jpg', title: 'Diamond Kites 1' },
    { image: 'icon-2.jpg', title: 'Diamond Kites 2' },
    { image: 'icon-3.jpg', title: 'Diamond Kites 3' },
    { image: 'icon-4.jpg', title: 'Diamond Kites 4' },
    
  ];
  // const cardbodies = [
  //   {images: 'icon-2.jpg', titles: 'Golden Kites'},
  //   {images: 'icon-2.jpg', titles: 'Golden Kites'},
  //   {images: 'icon-2.jpg', titles: 'Golden Kites'},
  //   {images: 'icon-2.jpg', titles: 'Golden Kites'},
  // ]
  // const name = 'divya';d 
  return (
    <div className="App">
      <Newheader imageName="logo.jpg" />  
      <Banner Bannerimage="banner.jpg"/>  
      <FirstBodySec Bodyimage="image.jpg"/>
      <h2>Types of Kites</h2>
      <Secondbodysec sectionBodies={sectionBodies} />
      {/* <Thirdbodysec cardbodies={cardbodies}/> */}
      <Newfooter/>
      {/* <Header/>
    <Headerbody/>
    <Home name = 'divya'/>   
    <Imageslider/>
    <Eventhandler/>
    <Fragementnote/>
    <Arraylist/>
    <Form/>
     <Footer/> */}
    </div>
  );
}

export default App;