import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./App.module.scss";
import { MediaList, Navbar } from "./features";
import { Heading } from "components";
import { useStore } from "AppContext";

const App: React.FC = observer(() => {
  const store = useStore();

  React.useLayoutEffect(() => {
    store.readMedias();
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      {store.isLoading && <Heading size="h1">Loading...</Heading>}
      {!store.isLoading && <MediaList list={store.mediaList} />}
    </main>
  );
});

export default App;
