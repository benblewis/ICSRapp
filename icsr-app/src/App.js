import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

import {
  DescriptionofVerticals,
  LandingHeader,
  Housing,
  Healthcare,
  SocialMedia,
  TopBar, 
  Policing
 } from './ui-components';

 const DEFAULT_PADDING = {
  bottom: 400
 };
  
function App() {
  return (
    <div className="App">
      <TopBar width={'100vw'}/>
      <LandingHeader width={'100vw'}/>
      <DescriptionofVerticals width={'100vw'}/>
      <div className='verticals'>
      <Policing />
      <Housing />
      <Healthcare />
      <SocialMedia />
      </div>
    </div>

  );
}

export default App;
