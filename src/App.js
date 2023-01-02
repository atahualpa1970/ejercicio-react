import './App.css';
import CreditFrame from './Layout/Components/CreditFrame';
import ExternalFrame from './Layout/Components/ExternalFrame';
import InternalFrame from './Layout/Components/InternalFrame';

function App() {
  return (
    <div className='App montserrat'>
      <header className='App-header'>
        <p>
          DigBang Challenge (Rodolfo Alvarez)
        </p>
        <ExternalFrame>
          <InternalFrame>
            <CreditFrame 
              amountMin={2000}
              amountMax={50000}
              monthMin={3}
              monthMax={24}
              rate={45}
            />
          </InternalFrame>
        </ExternalFrame>
      </header>
    </div>
  );
}

export default App;
