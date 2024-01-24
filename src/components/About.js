import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate();
    function clickHandler(){
        navigate('/labs')
    }
    function backHandler(){
        navigate(-1)
    }
    return (<div>
        <div>
        This is About us page
    </div>
    <button onClick={clickHandler}>Move to Labs Page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>)
}