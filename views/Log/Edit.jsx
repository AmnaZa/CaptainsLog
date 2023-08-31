const React = require('react');
const DefaultLayout = require('../Default');

const Edit = (props) => {
    return (
        <div>
            <DefaultLayout>
                <form action={`/logs/${props.log._id}`} method="POST">
                    <input type="hidden" name="_method" value="PUT" /> {/* Use _method to indicate PUT request */}
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" defaultValue={props.log.title} /> <br />
                    <label htmlFor="entry">Entry:</label>
                    <input type="text" name="entry" defaultValue={props.log.entry} /> <br />
                    <label htmlFor="shipIsBroken">Ship is Broken:</label>
                    {
                        props.log.shipIsBroken ?
                            <input type="checkbox" name="shipIsBroken" defaultChecked />
                            : <input type="checkbox" name="shipIsBroken" />
                    }
                    <br />
                    <input type="submit" value="Submit Changes!" />
                </form>
            </DefaultLayout>

            <br /> <a href={`/logs`}> Return to Index Page</a><br />
        </div>
    )
}

module.exports = Edit;
