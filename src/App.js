import './App.css';
import AddOns from './components/AddOns/AddOns';
import Finish from './components/finish/Finish';
import Personal from './components/personal/Personal';
import Plan from './components/plan/Plan';
import Step from './components/steps/Step';
import Summary from './components/summary/Summary';

function App() {
  return (
    <div className="App">
      <Step />
      <main className='component comp1 none'><Personal /></main>
      <main className='component comp2 none'><Plan /></main>
      <main className='component comp3 none'><AddOns /></main>
      <main className='component comp4 none'><Summary /></main>
      <main className='component comp5 '><Finish /></main>
    </div>
  );
}

export default App;
