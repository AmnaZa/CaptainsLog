const React = require('react');
const DefaultLayout = require('../Default');

const Delete = (props) => {
  return (
    <DefaultLayout>
      <div>
        <h1>Delete Log</h1>
        <p>Are you sure you want to delete this log?</p>
        <p>Title: {props.log.title}</p>
        <p>Entry: {props.log.entry}</p>
        <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
          <button type="submit">Delete</button>
          <a href={`/logs/${props.log._id}`}>Cancel</a>
        </form>
      </div>
    </DefaultLayout>
  );
};

module.exports = Delete;
