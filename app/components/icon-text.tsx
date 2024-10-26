import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextWithIcons = ({ text }: { text: string }) => {
    return (
        <div className='flex items-center gap-4 mt-4'>
            <div className="bg-blue-400 rounded-[50%] h-8 w-8 flex justify-center items-center p-4">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <p className='dark:text-slate-200 text-black'>
                {text}
            </p>
        </div>
    )
};


export default TextWithIcons;