import React,{useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogItem from './BlogItem';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

const Blog = () => {
    const blogData = useLoaderData();
    const {myStyle} = useContext(AuthContext);
    console.log(blogData)
    return (
        <div style={myStyle} className=' '>
          <div className="">
          <div style={{height: '30vh', width: '100%'}} className=" {myStyle.backgoundColor === 'black' ? 'bg-dark' : 'bg-light'} d-flex justify-content-center align-items-center">
           <div className=' text-center'>
            <p className='mb-4 fs-1'>Blog</p>
            <p className='fs-5 '>Our latest news, updates, and stories for developers</p>
           </div>
           </div>
          </div>
           <div className='w-100 container mt-5 pb-5'>
            <div style={myStyle} className="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogData.map(data => <BlogItem
                    key={data.id}
                    data={data}
                    ></BlogItem>)
                }
            </div>
           </div>
        </div>
    );
};

export default Blog;