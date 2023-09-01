const React = require('react');
const DefaultLayout = require('../Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>
          <h1>Log Index Page</h1>
          <a href="/logs/new">Create a New Log!</a>
          <ul>
            {this.props.logs.map((log, index) => (
              <li key={index}>
                <a href={`/logs/${log._id}`}>{log.title}</a><br />
                {log.entry}<br />
                {log.shipIsBroken ? 'Ship is Broken' : 'Ship is not Broken'}<br />
                <br />
                <a href={`/logs/${log._id}/edit`}>Edit This Log</a> |
                <a href={`/logs/${log._id}/delete`}>Delete</a>
              </li>
            ))}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
