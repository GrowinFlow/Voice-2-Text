import React from 'react';
import Btn from './Btn';
import TextBox from './TextBox';
import {MicrophoneOff, MicrophoneOn, MicrophoneNotSupport, Copy} from './Icons'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <MicrophoneNotSupport/>
  }




  const copyTranscriptToClipboard = () => {
    copyToClipboard(transcript); 
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Clipboard Copy . . . ');
    } catch (err) {
      console.error('Unable to copy', err);
    }
    document.body.removeChild(textArea);
  };


  return (
    <>
    <div className="container mx-auto bg-danger p-2 shadow-lg bg-opacity-10 my-4">

    <div className='border border-white p-4'>

      <p> {listening ? <MicrophoneOn /> : <MicrophoneOff />} </p>
      <div className='aligin-top f-flex'>

        <Btn function={SpeechRecognition.startListening} bg="primary" text="Start" />

        <Btn function={SpeechRecognition.stopListening} bg="warning" text="Stop" />

        <Btn function={resetTranscript} bg="danger" text="Clear" />
                <Btn 
          bg="light" 
          text={<Copy />} 
          function={copyTranscriptToClipboard} // 
        />

      </div>
      
      </div>
    </div>
      <TextBox inneratext={transcript}/>
    </>
  );
};
export default Dictaphone;