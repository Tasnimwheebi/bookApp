
import './App.css';
import LoginProvider from './context/authContext'
import Main from './components/main/main';
function App() {
  return (
    <LoginProvider>
    <div className="App">
    <Main/>
    </div>
    </LoginProvider>
  );
}

export default App;
