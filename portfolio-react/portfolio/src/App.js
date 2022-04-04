import { Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
