var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1>Examples</h1>
      <p>Here are a few example locations:</p>
      <ol>
        <li><Link to='/?location=Natal'>Natal, Brazil</Link></li>
        <li><Link to='/?location=Toronto'>Toronto, Canada</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;