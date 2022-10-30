import { useRef, useState } from 'react';

const HomePage = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = async e => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = {
      email: enteredEmail,
      text: enteredFeedback,
    };

    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  };

  const loadFeedbackHandler = async () => {
    const response = await fetch('/api/feedback');

    const data = await response.json();
    setFeedbackItems(data.feedback);
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" cols="5" ref={feedbackInputRef}></textarea>
        </div>
        <button type="">Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
