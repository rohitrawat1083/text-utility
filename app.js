
import React,{useState} from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import { Alert } from './Components/Alert';
//import { About } from './Components/About';
//import { RegistrationForm } from './Components/RegistrationForm';
 
  

function App() {

  const[mode,setmode] = useState('light');      //Setting default light mode

  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
        msg:message,
        type:type

    })

    setTimeout(() => { 
      setAlert(null);
    }, 1500);

  }
  


  const toggleSwitch = () =>{                   //after clicking on the switch it will change it to either dark or light mode

    if(mode ==='light'){
      setmode('dark');
      
      document.body.style.backgroundColor="#281c78";
    document.body.style.color="white"
    document.getElementById("flexSwitchCheckDefault").value="Enable light mode";
    showAlert("Dark mode has been enabled","success");
    document.title="Text Utils -Dark mode "
   
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black"
      showAlert("Light mode has been enabled","success");
      document.title="Text Utils Light mode"
    }
  }

  
  return (
    <>
{/*<Router>*/}
<NavBar title="TextUtils" AboutTitle="About us"  RegTitle="Registation Form" mode={mode} toggleSwitch={toggleSwitch}/>
<Alert alert={alert}/>

    
    {/*<Switch>
    <Route exact path="/about">

            <About />
    </Route>
          <Route exact path="/registrationform">
              <RegistrationForm />
    </Route>
          
  <Route exact path="/">*/}
          <TextForm  showAlert={showAlert} heading="Enter your Text to Analyze"/>
          {/*</Route>
    </Switch>
    </Router>
  */}

    </>
  );
}

export default App;
