import Default from "./designs/Default";
import Discord_Card_1 from "./designs/Discord_Card_1";
import InstagramCard_1 from "./designs/InstagramCard_1";

function App() {

  return (
    <main className="w-full min-h-screen bg-cyan-100 grid grid-cols-1 sm:grid-cols-2">
      <Default />
      <Discord_Card_1 />
      <InstagramCard_1 />
    </main>
  )
}

export default App
