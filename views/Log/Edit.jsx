const React = require('react');
const DefaultLayout = require('../Default');


const Edit = (props) => {
    return (
        <div>

            <DefaultLayout>
                <form action={`/edit/log/${props.log._id}?_method=PUT`} method="POST">

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
            {/* {props.log.title}<br />
            {props.log.entry}<br />
            {props.log.shipIsBroken ? " Ship Broke!" : " Ship not broke!"} */}

            <br /> <a href={`/logs`}> Return to Index Page</a><br />

        </div>
    )
}

module.exports = Edit;