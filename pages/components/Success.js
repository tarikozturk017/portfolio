import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Success = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" className=' bg-pink-700' onClick={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button className=' bg-slate-300' onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Success;