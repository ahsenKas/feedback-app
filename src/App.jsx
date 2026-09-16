import { useState } from "react";
import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState({
    isimSoyisim: "",
    email: "",
    yorum: "",
  });

  return (
    <div>
      <FeedbackForm feedback={feedback} setFeedback={setFeedback} />
      <FeedbackList feedback={feedback} setFeedback={setFeedback} />
    </div>
  );
}

export default App;
