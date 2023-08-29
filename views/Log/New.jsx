const React = require('react');
const DefaultLayout = require('../Default');


const New = (props) => {
  return (
    <DefaultLayout>

      <div>
        <h1> New Route </h1>
        <form action="/logs" method="POST">
          <label>title:</label>
          <input type="text" name="title" /><br />
          <label>entry:</label>
          <input type="text" name="entry" /><br />
          <label>Ship is Broken?:</label>
          <input type="checkbox" name="shipIsBroken" /><br />
          <input type="submit" name="" value="Create Log!" />
        </form>
      </div>
    </DefaultLayout>

  )
}

module.exports = New;