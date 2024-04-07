import './App.css';
import Header from './components/Header';
import img1 from './components/img1.jpg';
import c1 from './components/c1.png';
import image from './components/image.png';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
        <Header/>
      </header>
      <main >
        <div className='pre-cont'>
          <img src={img1} alt='logo1' className='logo1'></img>
          <img src={image} alt='normal' className='logo2' />
          <h1 className='headingtag'>
            $URANUS Web
          </h1>
          
          <br></br>
          <ul className='ulco'>
            <li>Everyone Loves to Pump Uranus more then they like when Uranus Dumps.</li>
            <br></br>
            <li>The liquidity injections just keep coming into Uranus.</li>
            <br></br>
            <li>Don’t pass gas (it’s gonna be giant)</li>
            <br></br>
            <li>Hold onto Uranus!</li>
            <br></br>
            <li>Disclaimer: This is all in good fun – a blend of memes, astrology, and crypto. We will not go moon, we going to Uranus.</li>
          </ul>  
          <p className='paa'>In Crypto We Trust, But In Uranus, We Believe!</p>
          <p className='paa1'>The Memeifesto<br></br>
            Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>
          <br></br>
          <br></br>
          <div className="card-container">
            
          <div className="card">
  <img src={c1} alt="Avatar" />
  <hr></hr>
  <div className="container">
    <a href="path/to/your/file.zip" download="myfile.zip" class="btn"><i class="fa fa-download"></i> Click here to Download</a>
  </div>
</div>

            <hr></hr>
            <div className="card">
              <img src={image} alt="Avatar" />
              <div className="container">
                <h4><b>Jane Doe</b></h4> 
                <p>Interior Designer</p> 
              </div>
            </div>
            <hr></hr>
            <div className="card">
              <img src={image} alt="Avatar" />
              <div className="container">
                <h4><b>Jane Doe</b></h4> 
                <p>Interior Designer</p> 
              </div>
            </div>
           
                
              
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
