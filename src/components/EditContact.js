import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditContact = (props) => {
  const { updateContactHandler } = props;
  const location = useLocation();
  const { contact } = location.state;
  const { id, name, email } = contact;

  const [state, setState] = useState({
    id,
    name,
    email,
  });
  let navigate = useNavigate();
  const edit = (e) => {
    e.preventDefault();
    updateContactHandler(state);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>

      <form to="/" className="ui form" onSubmit={edit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>

        <button type="submit" className="ui button blue">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContact;
