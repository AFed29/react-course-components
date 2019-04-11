import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        timeAgo="Today at 4:45PM" 
        commentText="Nice one!" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00PM" 
        commentText="What a great blog post" 
        avatar={faker.image.avatar()} 
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 3:59PM" 
        commentText="I want some more!!" 
        avatar={faker.image.avatar()} 
      />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);