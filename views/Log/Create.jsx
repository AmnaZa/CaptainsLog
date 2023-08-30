const React = require('react');
const DefaultLayout = require('../Default');

const Create = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Create New Log Entry</h1>
        <form action="/logs" method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" /> <br />
          <label htmlFor="entry">Entry:</label>
          <input type="text" name="entry" /> <br />
          <label htmlFor="shipIsBroken">Ship is Broken:</label>
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Create Log Entry" />
        </form>
        <br />
        <a href={`/logs`}>Return to Index Page</a><br />
      </div>
    </DefaultLayout>
  );
}

module.exports = Create;
