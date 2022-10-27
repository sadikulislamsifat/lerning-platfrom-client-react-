import React,{useContext} from 'react';
import { BsDownload } from 'react-icons/bs';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';

const BlogItem = ({data}) => {
    const {author, authorPhoto,date, description,  imageURL, title} = data;
    const {myStyle} = useContext(AuthContext);
    console.log(data)
    return (
        <div>
             <div style={{height: '600px'}}  className="col">
    <div style={myStyle} className="card h-100 border border-1">
      <img style={{height: '200px'}} src={imageURL} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div   className="card-footer border-0 ">
       <div style={myStyle}    className='d-flex justify-content-between'>
       <div   className='d-flex'>
            <div style={myStyle} >
                <img className='rounded-circle' style={{height:'45px', width:'45px' }} src={authorPhoto} alt=""/>
            </div>
            <div className='ms-3 mb-'>
                <p className='mb-0 text-primary'><small >{author}</small></p>
                <p className='mb-0'><small >{date}</small></p>
            </div>
        </div>
        <div className='mt-3 btn btn-outline-dark'>
          <BsDownload className='text-primary '></BsDownload> <span style={myStyle}   className='ms-1 '>PDF</span>
        </div>
       </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default BlogItem;