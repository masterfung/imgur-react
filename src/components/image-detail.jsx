var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var CommentBox = require('./comment-box');
var Actions = require('../actions');


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange'),
    Reflux.listenTo(CommentStore, 'onChange'),
  ],
  propTypes: {
    comments: React.PropTypes.node
  },
  getInitialState: function() {
    return {
      image: null,
      comments: null
    }
  },
  componentWillMount: function() {
    Actions.getImage(this.props.params.id);
  },
  render: function() {
    return <div className='top-padding-60 image-detail'>
      {this.state.image ? this.renderContent() : null}
    </div>
  },
  renderContent: function() {
    return <div className='panel panel-default'>
      <div className='panel-heading centering'>
        <h3>{this.state.image.title}</h3>
      </div>
      <div className='panel-body centering'>
        {this.renderImageVideo()}
        {this.renderDescription()}
      </div>
      <div>
        <h3>Comments</h3>
        {this.renderComments()}
      </div>
    </div>
  },
  renderDescription: function() {
    if (!this.state.image.description) {
      return null
    } else {
      return <div className='panel-footer'>
        <h5>{this.state.image.description}</h5>
      </div>
    }
  },
  renderComments: function() {
    if(!this.state.comments) {
      return null
    }
    return <CommentBox comments={this.state.comments} />
  },
  renderImageVideo: function() {
    if (this.state.image.animated) {
      return <video preload='auto' autoPlay='autoPlay' loop='loop' webkit-playsinline>
        <source src={this.state.image.mp4} type='video/mp4'></source>
      </video>
    } else {
      return <img src={this.state.image.link} />
    }
  },
  onChange: function() {
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comments: CommentStore.comment
    })
  }
});
