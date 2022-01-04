import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin , AiOutlineMail, AiOutlineGlobal} from "react-icons/ai";

const LeftSidebar = () => {
    return (
        <div className="fixed bottom-12 right-12 z-40">
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
        </div>
    )
}

export default LeftSidebar
