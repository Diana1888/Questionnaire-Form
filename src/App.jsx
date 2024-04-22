import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { FormProvider } from './context/FormContext';
import Multiform from './components/Multiform';

function App() {

  return (
    <div className='container'>
    <Header/>
    <FormProvider> 
      <Multiform />
    </FormProvider>
    <div className="footer-line"></div>
    <Footer/>
    </div>
  )
}

export default App
