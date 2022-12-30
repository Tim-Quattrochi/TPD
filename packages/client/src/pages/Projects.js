import { useAuth } from "../hooks/useAuth";

export default function Projects() {
  const { auth } = useAuth();

  console.log(auth);

  return (
    <div>{auth.user ? <p>Logged In</p> : <p>Logged out</p>}</div>
  );
}
