import Button from "../index";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    expect(wrapper.text()).toBe("Button");
  });

  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-pink-500")
    ).toBe(true);
  });

  test("red Button", () => {
    const wrapper = shallowMount(Button, {
      props: {
        color: "red",
      },
      slots: {
        default: "Button",
      },
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
