import React, { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

const BasicObservable = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const myObservable = new Observable(subscriber => {
      subscriber.next('Hello');
      subscriber.next('World');//values bhej rahe hain.
      subscriber.complete();
    });

    const collected = [];//Temporary array jisme values collect hongi 

    const subscription = myObservable.subscribe({
      next: value => collected.push(value),
      complete: () => setMessages(collected),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Basic Observable Output</h2>
      <ul>
        {messages.map((msg, index) => (
          <li>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicObservable;
