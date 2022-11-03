
import { useState, useEffect } from "react"; //these are hooks
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null); // null when it first renders,then value changes with useState
    const [isPending, setIsPending] = useState(true)

    // every time there is a re-render,thefunction in useEffect runs.
    // useEffect can also have a second argument(in addition to the fuction),an empty array or a value. The value is called useEffect dependency.
    // the useEffect function only runs after the value(dependency) cheanges/re renders
    // here,[name] is a dependency
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then(res => {

                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)// when data is available,isPending(false),so loading doesnt show
            })
            .catch(err => console.log(err))
        }, 1000);

    }, [])

            
        
    return (
        <div className="home">

            {/* if isPending is true, lodaing appears in browser*/}
            {isPending && <div>Loading...</div>}

            {/* the && is for: 
if blogs is null,it wont check the next condition,so nothing return
 if blogs is not null,the following condition runs(ie,bloglist) */}
            {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}


        </div>
    );
}


export default Home;

