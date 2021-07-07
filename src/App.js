import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Login from './component/Login';
import Signup from './component/Signup';
import Feed from './component/Feed';
import Profile from './component/Profile'
import { AuthContext, AuthProvider } from './contexts/AuthProvider'
import { useContext } from 'react';
// let isSingedUp = true;
function App() {
    // useEffect(() => {
    //     console.log("App is rendered")
    // })
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        <PrivateRoute path="/profile" abc={Profile}></PrivateRoute>
                        <PrivateRoute path="/" abc={Feed}></PrivateRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </>
    )
}
function PrivateRoute(props) {
    console.log(props);
    let Component = props.abc;
    let { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    return (<Route {...props} render={(props) => {
        return currentUser != null ? <Component {...props}></Component> : 
        <Redirect to="/login"></Redirect>
    }}></Route>
    )
}

export default App;