import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react"; // Asegúrate de que está importado correctamente

const ChatList = () => {
  const { isSignedIn, getToken } = useAuth(); // Extrae isSignedIn y getToken

  if (!isSignedIn) {
    return <div>No estás autenticado. Por favor, inicia sesión.</div>;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      const token = await getToken(); // Obtén el token de Clerk

      return fetch("https://aleia.onrender.com/api/userchats", {
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`, // Envía el token en los headers
        },
      }).then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text || "Error desconocido");
          });
        }
        return res.json(); // Parsear la respuesta si es exitosa
      });
    },
  });

  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Ale AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? (console.log("Error >>>>>", error), "Something went wrong!")
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Ale AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
