import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{

 
  },[])

  return (
    <div>
<div style={{
      position:"absolute",
      top:"100px",
    }} className="fb-login-button" config_id='458742549836535' data-width="100" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false" onClick={()=>{window.FB.login()}}></div>
  <button onClick={()=>{
     window.FB.getLoginStatus(function(response) {
      console.log(response);
  });
  }}/>
    </div>
    );
}

export default App;

/*
url to fetch all pages their id and access tokens
https://graph.facebook.com/{{api_version}}/me/accounts?fields=name,access_token,tasks&access_token={{user_access_token}}

sample response 
{
    "data": [
        {
            "name": "Testpage",
            "access_token": "EABprvJULjNYBO7Q2Qst6ZBIRSBxjr3NXRfhQse7XBMsI1ZCUW5DKpPKpcqpT3ve3aoiAAeMqewjYvm7SEvyjD6nerghYloO3ZBl5mDUhhvpEb9EF1z9fZAe52XdMSy4GiPOchXO4zdj6vtfWTFiXzaf9Fl7ZADZBAT1IsXyOtsSdrS4mBZBvASET3nCUNrveSIZA0rCO7RypdEEEMkspKhmw8hr5",
            "id": "285300134669173",
            "tasks": [
                "ADVERTISE",
                "ANALYZE",
                "CREATE_CONTENT",
                "MESSAGING",
                "MODERATE",
                "MANAGE"
            ]
        }
    ],
    "paging": {
        "cursors": {
            "before": "QVFIUmhqT2V5YlJSOEx4NXdyOXM2MFZAOcEpWUFlERzVwb09qbHR5NE9taVJEaG14S2oyQ3REakFudU9YYXhPcGo3WUo2VlpIMHVWemJmcFlsT0pfa0dfMklB",
            "after": "QVFIUmhqT2V5YlJSOEx4NXdyOXM2MFZAOcEpWUFlERzVwb09qbHR5NE9taVJEaG14S2oyQ3REakFudU9YYXhPcGo3WUo2VlpIMHVWemJmcFlsT0pfa0dfMklB"
        }
    }
}
*/