
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './Components/TopButton';
import Input from './Components/Input';
import TimeLocation from './Components/TimeLocation';
import TemperatureDetails from './Components/TemperatureDetails';
import Forecast from './Components/Forecast';


function App() {
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700
    to-blue-700 h-fit shadow-xl shadow-gray-400">
   <TopButton/>
   <Input/>
   <TimeLocation/>
   <TemperatureDetails/>
   <Forecast title={"hourly forecast"}/>
   <Forecast title={"daily forecast"}/>
  
    </div>
  );
}

export default App;
