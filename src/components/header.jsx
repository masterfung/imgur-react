var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Imgur Mock</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="../navbar/">Default</Link></li>
            <li><a href="../navbar-static-top/">Static top</a></li>
            <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  }
})
