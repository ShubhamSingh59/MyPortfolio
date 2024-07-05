import React from 'react';
import '../blogs/blogs.css';

function Blog() {
    const blogPosts = [
        {
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.'
        },
        {
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.'
        },
        {
            title: 'Third Blog Post',
            content: 'This is the content of the third blog post.'
        }
    ];

    return (
        <section id="blog">
            <h2>Blog</h2>
            {blogPosts.map((post, index) => (
                <div className="blog-post" key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </section>
    );
}

export default Blog;
