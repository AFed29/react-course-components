import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          commentText="Nice one!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00PM" 
          commentText="What a great blog post" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Yesterday at 3:59PM" 
          commentText="I want some more!!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);