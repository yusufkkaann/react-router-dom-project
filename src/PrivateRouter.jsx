import { Navigate } from "react-router-dom";
export default function PrivateRouter({ user, children }) {
  if (!user) {
    return <Navigate to="/giris-yap" replace />; // Navigate componenti ile yönlendirme yapıyoruz.
  }
  return <>{children}</>; // children prop'u ile gelen componenti render ediyoruz.
}
