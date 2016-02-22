var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {
    return <Link
      to={"images/" + this.props.id}
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handMouseLeave}
      className='img-preview'>
      {this.props.animated && this.state.hovering ? this.video() : this.imageRender()}
      {this.props.animated && !this.state.hovering ? this.icon() : null}
      {this.state.hovering ? this.inset(): null}
    </Link>
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
  inset: function() {
    return <div className='inset'>
      <strong>Views:</strong> {this.props.views}
      <br />
      <strong>Votes:</strong> {this.props.ups}
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
