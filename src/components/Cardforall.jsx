"use client"
import { useNavigate } from "react-router-dom"
import "../Styles/Card.css"

const Cardforall = ({ Products }) => {
const navigate = useNavigate()

const handleClick = () => {
    // First scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    // Then navigate to the product detail page
    navigate(`/product/${Products.id}`)
}

return (
    <div className="card-wrapper" onClick={handleClick}>
        <div className="card">
            <div className="card-image-container">
                <img src={Products.src || "/placeholder.svg"} alt={Products.alt || Products.title} />
            </div>
            <div className="card-content">
                <p>{Products.title}</p>
                <h4 className="price">${Products.price}</h4>
            </div>
        </div>
    </div>
    )
}

export default Cardforall;
