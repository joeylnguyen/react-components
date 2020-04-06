// TODO
// import GroceryList from "./GroceryList"

var groceryItems = ['Tapatio', 'Rice', 'Eggs', 'Lentil Chips', 'Tomato', 'Cheese', 'Cereal', 'Dog food', 'Bread'];


var App = () => <div><GroceryList groceries={groceryItems}/></div>;

var GroceryList = (props) => {
  return (
    <ul>
      {props.groceries.map(item => <GroceryListItem key={item} groceries={item}/>)}
    </ul>
  )
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
    console.log('on it!')
  }

  onListItemLeave() {
    this.setState({
      done: !this.state.done
    });
    console.log('left!');
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
      fontSize: this.state.done ? 'x-large' : 'medium'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemLeave.bind(this)}>{this.props.groceries}</li>
    );
  }
};


ReactDOM.render(<App />, document.getElementById("app"));



// var Chips = () => <li>Chips</li>;
// var Corn = () => <li>Corn</li>;