import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail, AiOutlineGlobal, AiOutlineWhatsApp} from "react-icons/ai";

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-24 right-4 z-40 flex flex-col items-center">
            <a href="https://vaibhav-bhoir.github.io/myportfolio/" target="_blank">
                <h1 className="text-secondary-100 dark:text-black text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success dark:hover:text-red-500">
                    <AiOutlineGlobal />
                </h1>
            </a>
            <a href="https://github.com/vaibhav-bhoir" target="_blank">
                <h1 className="text-secondary-100 dark:text-black text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success dark:hover:text-red-500">
                    <AiOutlineGithub />
                </h1>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-bhoir-b50a9a185" target="_blank">
                <h1 className="text-secondary-100 dark:text-black text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success dark:hover:text-red-500">
                    <AiOutlineLinkedin />
                </h1>
            </a>
            <a href="mailto:bhoirvaibhav90@gmail.com" target="_blank">
                <h1 className="text-secondary-100 dark:text-black text-5xl hover:-translate-y-2 transition ease-in-out hover:text-success dark:hover:text-red-500">
                    <AiOutlineMail />
                </h1>
            </a>
            <div className="whatsapp">
                <a target="_blank" href="https://wa.me/+918975588567?text=Hi%20Vaibhav.%20I%27d%20like%20to%20chat%20with%20you">
                <AiOutlineWhatsApp />
                </a>
            </div>
        </div>
    )
}

export default LeftSidebar
