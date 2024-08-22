// AddPost.jsx
import React from 'react';
import { Container, PostForm } from '../components';
import { useLocation } from 'react-router-dom';

function AddPost() {
    const location = useLocation();
    const status = location.pathname.includes('lost') ? 'lost' : 'found';

    return (
        <div className='py-8'>
            <Container>
                <PostForm defaultStatus={status} />
            </Container>
        </div>
    );
}

export default AddPost;
