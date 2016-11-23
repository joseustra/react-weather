var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations:</p>
      <ol>
        <li><Link to='/?location=Natal,Brazil'>Natal, Brazil</Link></li>
        <li><Link to='/?location=Toronto,Canada'>Toronto, Canada</Link></li>
        <li><Link to='/?location=Vancouver,Canada'>Vancouver, Canada</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;