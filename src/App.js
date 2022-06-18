import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./style.css";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact />
    </div>
  );
};

export default App;
