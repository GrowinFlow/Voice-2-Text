import React from 'react';
function TextBox(props) {
  return (
    <>
      <div className="clipCopy position-absolute w-100 d-flex justify-content-sm-end  mr-4">

      </div>
      <div className="container mx-auto p-2 bg-primary bg-opacity-25 shadow-lg">
        <p className='border border-white p-0 m-0'>
          <textarea 
            readOnly
            name="text" 
            id="text" 
            placeholder='Your text . . . .' 
            className='bg-transparent h-100 w-100 m-0 p-4 border border-transparent outline-transparent' 
            value={props.inneratext}>
          </textarea>
        </p>
      </div>
    </>
  );
}

export default TextBox;
