
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiReact} from 'react-icons/di'
import {BiLogoJavascript,BiLogoTailwindCss} from 'react-icons/bi'
const languageData = [
    {
        lang: "HTML",
        complited: "85%",
        bgColor: "repeating-linear-gradient(45deg, #f1bd5f, rgb(176 105 0) 11px)",
        icon: <AiFillHtml5/>,
        iconColor: " rgb(176 105 0)"
        
    },
    {
        lang: "CSS",
        complited: "75%",
        bgColor: "repeating-linear-gradient(45deg, #3F51B5, rgb(19 34 180) 11px)",
        icon: <DiCss3/>,
        iconColor: " rgb(19 34 180)"
    },
    {
        lang: "Java Script",
        complited: "70%",
        bgColor: "repeating-linear-gradient(45deg, #FFEB3B, #a09002 11px)",
        icon: <BiLogoJavascript/>,
        iconColor: " #a09002"
    }, {
        lang: "React js",
        complited: "72%",
        bgColor: "repeating-linear-gradient(45deg, #73b0e2e0, #005797 11px)",
        icon: <DiReact/>,
        iconColor: "  #005797 "
    },
    {
        lang: "Tailwind css",
        complited: "82%",
        bgColor: "repeating-linear-gradient(45deg, #0d5f68, #00BCD4 11px)",
        icon: <BiLogoTailwindCss/>,
        iconColor: "  #00BCD4"
    },
]
export default languageData