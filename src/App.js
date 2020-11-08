import react from 'react'
import Chatbot from 'react-chatbot-kit'
import './App.css';

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import Config from './Config'

function App(){
  return(
    <div className='App'>
      <header className='App-header'>
        <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
    </div>
  );
}
export default App;
