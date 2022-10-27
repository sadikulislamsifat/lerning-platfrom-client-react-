import React from 'react';

const BlogItem = ({data}) => {
    const {author, authorPhoto,date, description,  imageURL, title} = data;
    console.log(data)
    return (
        <div>
             <div style={{height: '600px'}}  className="col">
    <div className="card h-100">
      <img style={{height: '200px'}} src={imageURL} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer border-0 bg-white">
        <div className='d-flex'>
            <div>
                <img className='rounded-circle' style={{height:'45px', width:'45px' }} src={authorPhoto} alt=""/>
            </div>
            <div className='ms-3 mb-'>
                <p className='mb-0 text-primary'><small >{author}</small></p>
                <p className='mb-0'><small >{date}</small></p>
            </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default BlogItem;