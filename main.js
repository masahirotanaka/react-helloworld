const React = require('react');
const ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function() {
    return { name: "" };
  },
  handleChange: function(e) {
    this.setState({
      name: e.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="name" placeholder="Name" onChange={this.handleChange} />
        <br />
        <span>Hello World, {this.state.name}!</span>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
