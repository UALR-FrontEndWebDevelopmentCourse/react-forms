import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import UserForm from "./components/UserForm";
import store from "./store";
import UserInfo from "./components/UserInfo";

function App() {
    return (
        <Provider store={store}>
            <UserForm/>
            <UserInfo/>
        </Provider>
    );
}

export default App;
