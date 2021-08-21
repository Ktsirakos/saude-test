import { shallowMount } from "@vue/test-utils";
import PersonRow from "@/components/PersonRow.vue";
import { Gender, Person } from "@/datamodel";

describe("PersonRow", () => {
  it("renders props and UI when passed", () => {
    const person: Person = new Person(
      "_testId",
      "Konstantinos Tsirakos",
      25,
      Gender.MALE,
      { latitude: "-1", longitude: "-1" },
      { testKey: "testValue" },
      "blue"
    );

    const wrapper = shallowMount(PersonRow, {
      props: { person },
    });
    expect(wrapper.html()).toContain("Konstantinos Tsirakos");
    expect(wrapper.html()).toContain("Age: 25");
    expect(wrapper.html()).toContain('gender="0"');
  });

  it("On click it opens fields", () => {
    const person: Person = new Person(
      "_testId",
      "Konstantinos Tsirakos",
      25,
      Gender.MALE,
      { latitude: "-1", longitude: "-1" },
      { testKey: "testValue" },
      "blue"
    );

    const wrapper = shallowMount(PersonRow, {
      props: { person },
    });

    wrapper.get("button.topRow").trigger("click");
    expect(wrapper.vm.edit).toBeTruthy();
  });

  it("Re-click it closes fields", () => {
    const person: Person = new Person(
      "_testId",
      "Konstantinos Tsirakos",
      25,
      Gender.MALE,
      { latitude: "-1", longitude: "-1" },
      { testKey: "testValue" },
      "blue"
    );

    const wrapper = shallowMount(PersonRow, {
      props: { person },
    });

    wrapper.get("button.topRow").trigger("click");
    expect(wrapper.vm.edit).toBeTruthy();
    wrapper.get("button.topRow").trigger("click");
    expect(wrapper.vm.edit).not.toBeTruthy();
  });
});
