import {useState} from 'react'

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(['']);

  const submit = event => {
      event.preventDefault();
  }


  return (
    <div className="container">
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"></div>
        <input className="fs-5 fw-semibold" value={username}/>
        <div class="list-group list-group-flush border-bottom scrollarea">
          {messages.map(message => {
            return (
            <div class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{message.username}</strong>
              </div>
              <div class="col-10 mb-1 small">{message.message}</div>
            </div>
            )
          })}
        </div>
      </div>
      <form onSumbit={event => submit(event)}>
        <input className='form-control' placeholder='write a message' value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
