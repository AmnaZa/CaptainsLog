const React = require('react');
const DefaultLayout = require('../Default');

const Show = (props) => {
  return (
    <DefaultLayout>
      <div>
        <h1> Show Page </h1>
        {props.Log.title}<br />
        {props.Log.entry}<br />
        {props.Log.shipIsBroken ? " Ship Broke!" : " Ship not broke!"}
        <br /> <br />
        <a href={`/logs`}> Return to Index Page</a><br />
      </div>
    </DefaultLayout>
  )
}

module.exports = Show;
