import './App.css';
import Header from './components/Header';
import img1 from './components/img1.jpg';
import image from './components/image.png';
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header className="App-header">
        <Header/>
      </header>
    <main className='App-body'>
      <div className='pre-cont'>
        <img src={img1} alt='logo1' className='logo1'></img>
        <img src={image} alt='normal' className='logo2' />
        <h1 className='headingtag'>
        $URANUS Web
        </h1>
        <pre className='paragraph'>
        Uranus, the ruler of Aquarius, starts 2024 in retrograde, going direct on **Saturday, January 27**, then<br></br>
        retrogrades again on **Sunday, September 1.** This suggests ongoing evolution in your home life and <br></br>
        personal growth.<br></br> 
<br></br>
<br></br>
        Uranus champions individuality, social justice, and authenticity. During its retrograde, focus on<br></br>
        living by your values and perhaps engage more actively in humanitarian efforts.<br></br>
        <br></br>
<br></br>
        In 2024, the location of the Sun on the March equinox is in the constellation of Pisces but also on<br></br>
        the border of Aquarius. So, **we are slowly moving into a new age, from Pisces to Aquarius**.<br></br>
        <br></br>
<br></br>
       **Aquarius is ruled by Uranus, the planet that governs innovation, technology, and surprising<br></br>
       events**. Uranus perfectly mirrors Aquarius' distinctive attitude, complementing the nontraditional<br></br>
       nature of these visionary air signs.
        </pre>
        <br></br>

        <ul  className='ulco'>
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
<p className='paa'>In Crypto We Trust, But In Uranus, We Believe!</p>
<p className='paa1'>The Memeifesto
<br></br>
Welcome to the wild side of crypto - where memes aren't just dreams, and astrology isn’t just your daily horoscope.</p>
<br></br>
<br>
</br>
<div class="card">
  <img src={img1} alt="Avatar" />
  <div class="container">
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>

      </div>
    </main>

    <footer>

    </footer>
    </div>
    
  );
}

export default App;
