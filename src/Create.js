import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const researcher = { name, email, title, body}

            fetch('http://localhost:8000/researchers', {

                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(researcher)


            })

            navigate('/');

    }

  return ( 

      <div className="create">

          <form onSubmit={handleSubmit}>

                <label>Article  title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Article body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Article author:</label>
                <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Author's email:</label>
                <input 
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button>Submit</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{name}</p>
                <p>{email}</p>

          </form>

      </div>

   );
}
 
export default Create;