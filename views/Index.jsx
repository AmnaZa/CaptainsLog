const React = require('react');

function Index(props) {
  const logsList = props.logs.map(log => (
    <li key={log._id}>
      <a href={`/logs/${log._id}`}>{log.title}</a>
    </li>
  ));

  return (
    <div>
      <h1>Captain's Log</h1>
      <ul>{logsList}</ul>
      <a href="/logs/new">Create New Log</a>
    </div>
  );
}

module.exports = Index;
