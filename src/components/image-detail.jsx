var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');


module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange')],
  getInitialState: function() {
    return {
      image: null
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
      </div>
      <div className='panel-footer'>
        <h5>{this.state.image.description}</h5>
      </div>
    </div>
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
    this.setState({image: ImageStore.find(this.props.params.id)})
  }
});
