import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import store, { persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
        <div className="App">
          <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
              <Header />

              <hr className="mt-4" />

              <Todos />
              <hr className="mt-4" />
              <Footer />
            </div>
          </div>
        </div>
    </Provider>
      </PersistGate>
  );
}

export default App;
