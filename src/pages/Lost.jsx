// Lost.jsx
import { useState, useEffect } from 'react';
import React from 'react';
import { Container, PostCard, Button } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate } from 'react-router-dom';

function Lost() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts([]).then((response) => {
            if (response) {
                // Filter posts with status 'lost'
                const lostPosts = response.documents.filter(post => post.status === 'lost');
                setPosts(lostPosts);
            }
        });
    }, []);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex justify-end mb-4'>
                    <Button onClick={() => navigate('/add-post')}>Add Lost Post</Button>
                </div>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Lost;
