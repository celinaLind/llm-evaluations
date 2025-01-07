import { TestCase } from "@/lib/utils/test-case";
import { create } from "zustand";

export type TestCaseState = {
  testcases: TestCase[];
};

export type TestCaseActions = {
  createTestCase: (testCases: Partial<TestCase>) => void;
  updateTestCase: (id: number, updatedFields: Partial<TestCase>) => void;
  deleteTestCase: (id: number) => void;
};

export type TestCaseStore = TestCaseState & TestCaseActions;

export const useTestCaseStore = create<TestCaseStore>((set) => ({
  testcases: [],
  createTestCase: (testCase) => {
    const newTest = new TestCase(testCase);
    set((state) => ({
      testcases: [...state.testcases, newTest],
    }));
  },
  deleteTestCase: (id) =>
    set((state) => ({
      testcases: state.testcases.filter((test) => test.id !== id),
    })),
  updateTestCase: () => {}, //FUTURE
}));
