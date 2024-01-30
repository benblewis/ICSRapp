import { useEffect, useState } from 'react'
import './App.css'

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { getUrl, list } from 'aws-amplify/storage';
import MyImage from './ui-components/policeimage.jpg'; 

import {
  PolicingPageHeader, Description
 } from './ui-components';
 
function App({ signOut, user }) {
  const [fileUrls, setFileUrls] = useState([]);

  async function generateSignedUrl(key) {
    try {
      const result = await getUrl({key: key});
      return result.url.toString();
    } catch (error) {
      console.log("error generating signed url", key, error);
    }
  }

  useEffect(() => {
    async function fetchFileUrls() {
      try {
        const result = await list('');
        const files = result.items.filter((item) => item.size > 0); // filter out directories
        console.log(files)
        let fileUrls = [];
        for (const file of files) {
          const url = await generateSignedUrl(file.key);
          fileUrls.push([file.key, url]);
        }
        console.log(fileUrls);
        setFileUrls(fileUrls);
      } catch (error) {
        console.log("error fetching files and generating urls", error);
      }
    }

    // the ignore stuff comes from https://react.dev/reference/react/useEffect#fetching-data-with-effects
    let ignore = false;
    fetchFileUrls();
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <div>
          <img src={MyImage} 
          className="logo" 
          alt="PoliceImage"
          height="100%"
          width="100%"
          />
        </div>

      <div>
        <PolicingPageHeader />
        <Description />
      </div>
      <h1>Hello Criminal Justice Researcher</h1>
      <Button onClick={signOut}>Sign out</Button>
      <h1>Bucket contents</h1>
      <div className="card">
          {fileUrls.map(([key, url]) => (
              <p key={key}><a href={url}>{key}</a></p>
          ))}
      </div>
    </>
  )
}

export default withAuthenticator(App);
