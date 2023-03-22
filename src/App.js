import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import UserForm from "./components/UserForm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <UserForm/>
    </Provider>
  );
}

export default App;
