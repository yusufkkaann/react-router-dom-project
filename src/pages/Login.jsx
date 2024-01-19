export default function Login({ handleLogin }) {
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin} className="btn btn-primary">
        Giriş Yap
      </button>
    </>
  );
}
