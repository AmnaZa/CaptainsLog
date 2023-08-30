const React = require('react');
const DefaultLayout = require('../Default');

const Update = (props) => {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit Log Entry</h1>
        <form action={`/logs/${props.log._id}`} method="POST">
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" defaultValue={props.log.title} /> <br />
          <label htmlFor="entry">Entry:</label>
          <input type="text" name="entry" defaultValue={props.log.entry} /> <br />
          <label htmlFor="shipIsBroken">Ship is Broken:</label>
          <input type="checkbox" name="shipIsBroken" defaultChecked={props.log.shipIsBroken} />
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
        <br />
        <a href={`/logs`}>Return to Index Page</a><br />
      </div>
    </DefaultLayout>
  );
}

module.exports = Update;
