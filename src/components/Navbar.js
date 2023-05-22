import { useUser, _kc } from "../context/userContext";

export default function Navbar() {
  const user = useUser();
  return (
    <header>
      <h1>Todo App 3</h1>
      <h2>the current user is {user ? "" : " not "} connected</h2>
      <div className="container">
        {user ? (
          <>
            <span>{user.name}</span>
            <div
              style={{
                padding: "10px",
                border: "1px solid blue",
                borderRadius: "50%",
              }}
            >
              {`${user.family_name[0]}${user.given_name[0]}`}
            </div>
            <button onClick={_kc.logout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={_kc.login}>login</button>
            <button>sign up</button>
          </>
        )}
      </div>
    </header>
  );
}
