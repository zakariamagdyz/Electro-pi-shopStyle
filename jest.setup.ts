import "@testing-library/jest-dom";
import { storeResetFns } from "./__mocks__/zustand";

import { act } from "@testing-library/react";

beforeEach(() => {
  if (typeof window !== "undefined") {
    window.localStorage.clear();
    window.sessionStorage.clear();
  }
});

afterEach(() => {
  jest.clearAllMocks();
  // loop through all store reset functions and call them
  storeResetFns.forEach((resetFn) => {
    act(() => {
      resetFn();
    });
  });
});
