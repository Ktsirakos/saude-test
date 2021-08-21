import { Person, PersonJSON } from "@/datamodel";
import { fetchData } from "@/services/dataFetcher";
import { ActionContext, ActionTree, createStore } from "vuex";
export interface State {
  people: Person[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  people: Person[];
}

const initialState: State = {
  people: [],
};

export const Mutations = {
  SET_PEOPLE: "setPeople",
  CHANGE_PERSON: "changePerson",
};

export const Actions = {
  INITIALIZE_STORE: "initializeState",
};

export const Getters = {
  GET_ALL_PEOPLE: "getAllPeople",
};
export default createStore({
  state: initialState,
  mutations: {
    setPeople(state: State, data: Person[]): void {
      state.people = data;
      console.log(data);
    },
    changePerson(
      state: State,
      payload: {
        person: Person;
      }
    ) {
      debugger;
      const curr = state.people;
      curr[curr.findIndex((elem) => elem.id() === payload.person.id())] =
        payload.person;
      state.people = curr;
    },
  },
  getters: {
    getAllPeople(state: State): Person[] {
      return state.people;
    },
  },
  actions: {
    initializeState(ctx: ActionContext<State, RootState>): Promise<void> {
      return new Promise((resolve, reject) => {
        fetchData().then((data: PersonJSON[]) => {
          ctx.commit(
            Mutations.SET_PEOPLE,
            Person.prototype.fromPersonJSONArray(data)
          );
          resolve();
        });
      });
    },
  },
  modules: {},
});
