import './scss/index.scss';

import { Navbar } from './components';
import { Header, About, Articles, Footer } from './containers';

function App() {
  return (
    <div className='App overflow-hidden'>
      <Navbar />
      <Header />
      <About />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
