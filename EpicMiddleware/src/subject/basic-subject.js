import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

const BasicSubject = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const subject = new Subject();
    const collected = [];

    const subscription = subject.subscribe({
      next: (value) => collected.push(value),
      complete: () => setMessages([...collected])
    });

    // Emitting values
    subject.next("Hello from Subject");
    subject.next("This is reactive");
    subject.complete();

    return () => subscription.unsubscribe(); // Cleanup
  }, []);

  return (
    <div>
      <h2>Basic Subject Output</h2>
      <ul>
        {messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasicSubject;
