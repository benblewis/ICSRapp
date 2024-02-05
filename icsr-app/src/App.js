import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

import MyImage from './ui-components/faces.png'; 
import {
  Housing,
  Healthcare,
  SocialMedia,
  TopBar, 
  Policing,
  MITsInitiativeonCombatingSystemicRacismUsingDatatoinformunbiasedpolicyrecommendations,
  Line1
 } from './ui-components';

 const DEFAULT_PADDING = {
  bottom: 400
 };
  
function App() {
  return (
    <div className="App">
      <div className='top'>
      <TopBar />
      <MITsInitiativeonCombatingSystemicRacismUsingDatatoinformunbiasedpolicyrecommendations />
      <Line1 />
      </div>
      <div>
          <img src={MyImage} 
          className="faces" 
          alt="HomeImage"
          height="20%"
          width="20%"
          />
        </div>
        <br></br>
        <br></br>
      <div className='verticals'>
      <Policing />
      <Housing />
      <Healthcare />
      <SocialMedia />
      </div>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}><Line1 /></div>
    </div>

  );
}

export default App;
