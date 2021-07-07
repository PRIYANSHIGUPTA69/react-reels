import react , {useState,useContext} from 'react'
import { AuthContext } from '../contexts/AuthProvider';

export default function Feed(){
    const [loading, setLoading] = useState(false);
    const { signout } = useContext(AuthContext);
    // const [reel, setReel] = useState();
    const handleLogout = async () => {
        try {
            setLoading(true);
            // auth provider 
            await signout();
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }
    return (
        <div>

            <button onClick={handleLogout} >logout</button>
        </div>
    )
}