var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {
    return <div
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handMouseLeave}
      className='img-preview'>
      {this.props.animated && this.state.hovering ? this.video() : this.imageRender()}
      {this.props.animated && !this.state.hovering ? this.icon() : null}
    </div>
  },
  imageRender: function() {
    var link = "https://i.imgur.com/" + this.props.id + 'h.jpg';

    return <img src={link}/>
  },
  video: function() {
    return <div>
      <video preload='auto' autoPlay='autoPlay' loop='loop' webkit-playsinline>
        <source src={this.props.mp4} type='video/mp4'></source>
      </video>
    </div>
  },
  icon: function() {
    return <span className='glyphicon glyphicon-play'></span>
  },
  handleMouseEnter: function() {
    this.setState({hovering: true})
  },
  handMouseLeave: function() {
    this.setState({hovering: false})
  }
})
