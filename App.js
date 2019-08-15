import React, {Component} from 'react';
import { Root } from 'native-base';
import AppNavigator from './src/routes/rootNavigator';
import { Provider } from "react-redux";
import store from "./src/public/redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Root><AppNavigator/></Root>
      </Provider>
    )
  }
}