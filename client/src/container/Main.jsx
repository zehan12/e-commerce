import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import 'animate.css';
import Landing from "../page/screen/Landing";
import App from '../page/screen/Post/Post';
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <main>
            {/* <Landing /> */}
            <App />
          </main>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default Main;
