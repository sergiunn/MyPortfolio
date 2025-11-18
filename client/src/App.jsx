import './index.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <Navbar />
      <header className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg text-gray-600 mt-2">
          Embedded software developer transitioning into full-stack development.
        </p>
      </header>

      <main className="max-w-4xl mx-auto mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Home</h2>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Projects</h2>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
