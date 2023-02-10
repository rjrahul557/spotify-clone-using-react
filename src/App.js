import React, {useEffect} from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
//allow react app to interact with spotify
const spotify = new SpotifyWebApi();

function App() {
  //usestate act as an temporary memory saver
 
  const [{user,token}, dispatch] = useDataLayerValue();

  //run code based on condition
  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = ""; //clean the url
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

      

      spotify.setAccessToken(_token); // provide access token to api for interaction 

      spotify.getMe().then((user) =>{

        dispatch({
          type:"SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist("03C5m7gfDP5ecSHlBbBkuv").then((response) => {
        console.log(response);
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        });

      });
   }

 
 
  },[]);

  
  return (
    <div className="app">
      {
        token ?<Player spotify = {spotify} />: <Login />
      }
      
    </div>
  );
}

export default App;
