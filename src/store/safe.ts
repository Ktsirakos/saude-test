import { Person } from "@/datamodel";
import { mapActions, Store } from "vuex";
import { Actions, Getters, Mutations, State } from ".";

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
  commitChangePerson(person: Person): void {
    return store.commit(namespace + Mutations.CHANGE_PERSON, {
      person,
    });
  },
  getAllPeople(): Person[] {
    return store.getters[namespace + Getters.GET_ALL_PEOPLE];
  },
  dispatchInitializeStore(): Promise<void> {
    return store.dispatch(namespace + Actions.INITIALIZE_STORE);
  },
};

export default safe;
