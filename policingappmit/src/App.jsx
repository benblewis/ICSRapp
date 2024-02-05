import { useEffect, useState } from 'react'
import './App.css'

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { getUrl, list } from 'aws-amplify/storage';
import MyImage from './ui-components/ICSR-Policing_image1.jpg'; 
import Select from "react-dropdown-select";

import {
  TopBar, PolicingPageHeader, Description
 } from './ui-components';
 

 function FileList({ fileUrls, stateFilter }) {
  if (stateFilter != "") {
    fileUrls = fileUrls.filter(([key, url]) => key.startsWith(stateFilter));
  }
  return (
    <div className="card">
    {fileUrls.map(([key, url]) => (
      <p key={key}><a href={url}>{key}</a></p>
    ))}
    </div>
  );
}


async function generateSignedUrl(key) {
  try {
    const result = await getUrl({key: key});
    return result.url.toString();
  } catch (error) {
    console.log("error generating signed url", key, error);
  }
}

/*const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    color: 'black',
  }),
  // Add other custom styles here as needed
};
*/
const options = [
  {value: 1, label: 'Arizona'},
  {value: 2, label: 'California' },
  {value: 3, label: 'Colorado'},
  {value: 4, label: 'Connecticut'},
  {value: 5, label: 'Illinois'},
  {value: 6, label: 'Kentucky'},
  {value: 7, label: 'Louisiana'},
  {value: 8, label: 'Maryland' },
  {value: 9, label: 'Michigan'},
  {value: 10, label: 'Minnesota'},
  {value: 11, label: 'Nebraska'},
  {value: 12, label: 'Neveda'},
  {value: 13, label: 'New Mexico'},
  {value: 14, label: 'New York' },
  {value: 15, label: 'North Carolina'},
  {value: 16, label: 'Ohio'},
  {value: 17, label: 'Oklahoma'},
  {value: 18, label: 'Oregon'},
  {value: 19, label: 'South Carolina'},
  {value: 20, label: 'Texas' },
  {value: 21, label: 'Wisconsin'}
];

function App({ signOut, user }) {
  const [fileUrls, setFileUrls] = useState([]);
  const [stateFilter, setStateFilter] = useState("");
  
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
    <div><TopBar /></div>
    <h1 style={{fontSize: '40px', 
    fontFamily:'Source Sans Pro'}}>Welcome to the Policing Lab</h1>
      <Button onClick={signOut}>Sign out</Button>
      <div>
          <img src={MyImage} 
          className="logo" 
          alt="PoliceImage"
          height="80%"
          width="80%"
          />
        </div>

      <div className='descs'>
        <PolicingPageHeader />
        <Description />
      </div>
      <h1 style={{fontSize: '40px', 
    fontFamily:'Source Sans Pro'}}>Use the dropdown below to see data files for a specific state</h1>
      
      <Select className="select-black"
        options={options}
        onChange={(values) => setStateFilter(values[0].label)}
        placeholder="Select a state"
        //styles={customStyles}
        />
      <FileList
        fileUrls={fileUrls}
        stateFilter={stateFilter}
      />
    </>
  )
}

export default withAuthenticator(App);
