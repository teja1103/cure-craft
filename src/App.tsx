// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import DoctorsConsultation from './components/DoctorsConsultation';
import BMICalculatorPage from './components/BMICalculatorPage';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DoctorsConsultation" component={DoctorsConsultation} />
          <Route path="/BMICalculatorPage" component={BMICalculatorPage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
