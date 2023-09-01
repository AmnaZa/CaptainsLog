const React = require('react');
const DefaultLayout = require('../Default');

class EditLog extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <form action={`/logs/${log._id}`} method="POST">
          <input type="hidden" name="_method" value="PUT" /> {/* Use _method to indicate PUT request */}
          <fieldset>
            <legend>Edit Log Entry</legend>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" defaultValue={log.title} /> <br />
            <label htmlFor="entry">Entry:</label>
            <input type="text" name="entry" defaultValue={log.entry} /> <br />
            <label htmlFor="shipIsBroken">Ship is Broken:</label>
            {
              log.shipIsBroken ?
                <input type="checkbox" name="shipIsBroken" defaultChecked />
                : <input type="checkbox" name="shipIsBroken" />
            }
            <br />
            <input type="submit" value="Submit Changes!" />
          </fieldset>
        </form>
        <br /> <a href={`/logs`}> Return to Index Page</a><br />
      </DefaultLayout>
    )
  }
}

module.exports = EditLog;
