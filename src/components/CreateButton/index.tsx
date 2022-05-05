import React from "react"
import { useNavigate } from "react-router-dom"
import plus from "../../icons/plus-icon.svg"
import styles from "./create-button.module.css"

const CreateButton: React.FC = () => {
    const navigate = useNavigate();

    const goToPage = () => {
        navigate("/create-product")
    }

    return <>
        <button onClick={goToPage} className={styles.button}>
            <img src={plus} alt="plus" />
        </button></>
}

export default CreateButton;