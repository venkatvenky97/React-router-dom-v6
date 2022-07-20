import { useNavigate } from "react-router-dom"

 const About = () => {
    const navigate = useNavigate()
    return (
    <>
    <div>Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC
       

</div>
    <button onClick={() => navigate("order-summary")}>Back to go</button>
    </>
    )
}

export default About;