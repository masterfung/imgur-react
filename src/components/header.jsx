var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(TopicStore, 'onChange')],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <nav className="navbar navbar-default navbar-fixed-top header">
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
            {this.renderTopics()}
          </ul>
        </div>
      </div>
    </nav>
  },
  renderTopics: function() {
    return this.state.topics.slice(0,4).map(function(topic) {
      return <li key={topic.id}><Link to={"topics/"+ topic.id}>{topic.name}</Link></li>
    })
  },
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    })
  }
})
