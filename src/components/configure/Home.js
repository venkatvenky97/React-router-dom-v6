import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        <div>Home React route</div>
        <button onClick={() => navigate("order-summary")}>Place Order</button>
        </>

    )
}