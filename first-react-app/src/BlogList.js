const BlogList = ({blogs,title,handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
          {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> 
              {/* after onclick,we have an anonymous function that uses the fuction handleDelte amd passes in an argument */}
            </div>
          ))}
        </div>
     );
}
 
export default BlogList;