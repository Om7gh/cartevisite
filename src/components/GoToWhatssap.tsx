import ReactWhatsapp from "react-whatsapp"
import { Button } from "./ui/button"
import {FaWhatsapp} from "react-icons/fa"

const GoToWhatssap = () => {
    return (
        <Button className="m-auto bg-green-900">
            <FaWhatsapp className="w-5 h-5" />
            <ReactWhatsapp
                number="+2120623868579"
                message="Bonjour !"
                style={{
                    border: "none",
                    cursor: "pointer",
                    padding: ".6rem 1.2rem",
                    background: "none",
                    color: "var(--gray-color)",
                }}
            >
                +212 623-868579
            </ReactWhatsapp>
        </Button>

    )
}

export default GoToWhatssap