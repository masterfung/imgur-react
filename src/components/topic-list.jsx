var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function () {
    return <div className='list-group top-padding'>
      <h1>Topic Lists</h1>
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <Link activeClassName="active" to={"topics/" + topic.id} key={topic.id} className='list-group-item'>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    })
  },
  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
});
