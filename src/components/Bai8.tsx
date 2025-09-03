import { useReducer } from "react";
import "./css/Bai8.css";  
const user = {
  name: "",
  email: ""
};

type State = typeof user;

type user =
  | { name: string }
  | { email: string };

function reducer(state: State, action: user): State {
  if ("name" in action) {
    return { ...state, name: action.name };
  }
  if ("email" in action) {
    return { ...state, email: action.email };
  }
  return state;
}

function Bai8() {
  const [state, setState] = useReducer(reducer, user);

  return (
    <div className="container">
      <form className="form">
        <label>
          Nhập tên:
          <input
            type="text"
            value={state.name}
            onChange={(event) => setState({ name: event.target.value })}
            className="input"
          />
        </label>
        <label>
          Nhập email:
          <input
            type="email"
            value={state.email}
            onChange={(event) => setState({ email: event.target.value })}
            className="input"
          />
        </label>
      </form>

      <div className="result">
        <p>Tên: {state.name}</p>
        <p>Email: {state.email}</p>
      </div>
    </div>
  );
}

export default Bai8;
