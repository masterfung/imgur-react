var React = require('react');
var Actions = require('../actions');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange')],
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps) {
    Actions.getImages(nextProps.params.id);
  },
  render: function() {
    return <div className='top-padding-60 topic'>
      {this.renderImages()}
      </div>
  },
  renderImages: function() {
    return this.state.images.slice(0, 60).map(function(image){
      return <ImagePreview key={image.id} {...image}></ImagePreview>
    })
  },
  onChange: function(event, images) {
    this.setState({
      images: images
    })
  }
})
