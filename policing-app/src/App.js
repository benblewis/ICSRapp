
import { Amplify } from 'aws-amplify';
import { API, Auth } from 'aws-amplify';
//import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import awsExports from './aws-exports';
import { useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

Amplify.configure(awsExports);
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

/*function App() {
  
  async function getToken() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log("token: ", token)
  }

  async function callApi() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log("token: ", token)

    const requestData = {
        headers: {
            Authorization: token,
        }
    }
    const data = await API.get('policingauthapi', '/items', requestData)
    console.log("data: ", data)
  }
  
  const { signOut } = useAuthenticator()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getToken}>Get token</button>
        <button onClick={callApi}>Call API</button>
        <button onClick={() => signOut()}>Log Out</button>
      </header>
    </div>
  );
}
*/

function App({signOut, user}) {
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);
  const [s3DownloadLinks, setS3DownloadLinks] = useState([]);

  const uploadFile = async () => {
  };

  //const s3Objects = Storage.list("*")
  //console.log(s3Objects)
  async function listObjectsFromS3(){
    try{
    const s3Objects = await Storage.list("*");
    //console.log("s3Objects",s3Objects);
    s3Objects.map(async (item) => {
      console.log(30, item);
      let downloadLink = await generateDownloadLinks(item.key);
      setS3DownloadLinks((s3DownloadLinks) => [
        ...s3DownloadLinks,
        downloadLink,
      ]);
    })}
    catch(error){
      console.error("Error fetching S3 objects:", error);
    }
  }


/*async function listObjectsFromS3() {
  try {
    const s3Objects = await Storage.list("*");
    console.log(s3Objects);

    // Check if s3Objects is an array
    if (Array.isArray(s3Objects)) {
      // Use forEach instead of map for async operations
      await Promise.all(
        s3Objects.map(async (item) => {
          console.log(30, item);
          let downloadLink = await generateDownloadLinks(item.key);
          setS3DownloadLinks((s3DownloadLinks) => [
            ...s3DownloadLinks,
            downloadLink,
          ]);
        })
      );
    } else {
      console.error("s3Objects is not an array:", s3Objects);
    }
  } catch (error) {
    console.error("Error listing S3 objects:", error);
  }
}
*/
/*  async function generateDownloadLinks(fileKey) {
    const result = await Storage.get(fileKey, { download: true});
    return downloadBlob(result.Body, "filename");
  }

  async function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    return a;
  }
*/

function lists3(){
  Storage.list('')
  .then(result => console.log(result))
  .catch(err => console.log(err));
  }

async function generateDownloadLinks(fileKey) {
  const url= await Storage.get(fileKey);
  return url;
}
  useEffect(() => {
    listObjectsFromS3();
  }, []);

  useEffect(() => {
    lists3();
  }, []);

  return (
    <div className="App">
    <button onClick={signOut}>Sign out </button>    
    <div>
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
    </div>  
    
    <div>
      <button onClick={uploadFile}>Upload file</button>
    </div>

    <div>{fileStatus ? "File upladed successfully" : ""}</div>

    {/* List all s3 objects and download by clicking on the link */}
    {s3DownloadLinks.map((url, index) => (
      <div key={index}>
        <a href={url} target="_blank" rel="noreferrer" download="">
        Download File {index + 1}
        </a>
        </div>
    ))}
    </div>
  );
}

export default withAuthenticator(App);
