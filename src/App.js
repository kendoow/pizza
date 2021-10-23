import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Cart, Home } from "./pages";
import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";

// function App() {
//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      store.dispatch(setPizzas(data.pizzas));
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            render={() => <Home items={this.props.items} />}
            exact
          />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
