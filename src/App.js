import logo from './logo.svg';
import './App.css';
import ArrowEvent from './components/ArrowEvents'
// Functional component
const Message = props => {
  return (
    <div className="message-container">
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
      </div>
    </div>
  );
};

const App = props => {
  return (
    <div>
      <h2>Message List</h2>
      {props.messages.map((message, i) => (
        <Message
          key={`message-${i}`}
          text={message.text}
          sentBy={message.sentBy}
        />
      ))}
    </div>
  );
};
export default App;
