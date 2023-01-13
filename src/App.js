import './App.css';
import solidLines from './assets/img/Solid_lines.svg'
import logo from './assets/img/logo.png'
import Form from './components/Form';
function App() {
  return (
    <>
    <img src={logo} alt="logo" className='logo'/>
      <div className='container'>
        <div className="wrapper">
          <img src={solidLines} className='solid-lines' alt="" />
          <h1>It's delight to have you <br/> onboard</h1>
          <div className="sub-headings">
          <p>Help us know you better</p>
          <p>(This is how we optimize Wobot as per your business needs)</p>
          </div>
          <Form/>
        </div>
      </div>
      <p className='terms'>Terms of use | Privacy policy</p>
    </>
  );
}

export default App;
