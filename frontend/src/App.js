import axios from 'axios';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(['']);

  const handleSubmit = event => {
    axios.get(`http://localhost:8000/ping/83`)
      .then(res => {
        console.log(res.data);
      })
    event.preventDefault();
  }


  return (
    <div className="container">
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"></div>
        <input className="fs-5 fw-semibold" value={username} />
        <div className="list-group list-group-flush border-bottom scrollarea">
          {messages.map(message => {
            return (
              <div className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                  <strong className="mb-1">{message.username}</strong>
                </div>
                <div className="col-10 mb-1 small">{message.message}</div>
              </div>
            )
          })}
        </div>
      </div>
      <form>
        <input className='form-control' placeholder='write a message' value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
