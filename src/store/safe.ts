import { mapActions, Store } from "vuex";
import { Actions, State } from ".";

let store: Store<State>;
let namespace: string;

const safe = {
  initialise(s: Store<State>, ns?: string): void {
    console.log(
      "DataModel:initialise datamodel/vuex/safe with namespace: " + ns
    );
    store = s;
    namespace = ns ? ns + "/" : "";
  },
  isInitialised(): boolean {
    return Boolean(store);
  },
  dispatchInitializeStore(): Promise<void> {
    return store.dispatch(namespace + Actions.INITIALIZE_STORE);
  },
};

export default safe;
