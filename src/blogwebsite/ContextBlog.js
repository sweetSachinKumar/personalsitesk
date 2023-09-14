import { createContext } from "react";

export const Contextblog = createContext()

const BlogProvider = ({children}) => {
    const name= "      sachin"
    const name2= "sa2chin"
    return(
        <Contextblog.Provider value={name}>
            {children}
        </Contextblog.Provider>
    )
}
export default BlogProvider;