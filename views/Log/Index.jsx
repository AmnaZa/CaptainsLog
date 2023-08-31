const React = require('react');
const DefaultLayout = require('../Default');

const Index = (props) => {
  console.log(props.logs.length);
  return (
    <DefaultLayout>
      <div>
        <h1>Log Index Page</h1>
        <a href="/logs/new">Create a New Log!</a>
        <ul>
          {props.logs.map((log, index) => {
            return (
              <li key={index}>
                <a href={`/logs/${log._id}`}> {log.title}</a><br />
                {log.entry}<br />
                {log.shipIsBroken ? `Ship is Broken` : `Ship is not Broken`}<br />
                <br />
                <a href={`/edit/${log._id}`}>Edit This Log</a> |
                <a href={`/logs/${log._id}/delete`}>Delete</a> {/* Add this line */}
              </li>
            );
          })}
        </ul>
      </div>
    </DefaultLayout>
  );
}

module.exports = Index;
