import { Experiment } from "@/lib/utils/experiment";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

export type ExperimentState = {
  experiments: Experiment[];
};

export type ExperimentActions = {
  createExperiment: (experiment: Partial<Experiment>) => number;
  updateExperiment: (id: number, updatedFields: Partial<Experiment>) => void;
  deleteExperiment: (id: number) => void;
};

export type ExperimentStore = ExperimentState & ExperimentActions;

export const useExperimentStore = create<ExperimentStore>((set) => ({
  experiments: [],
  createExperiment: (experiment) => {
    const newExperiment = new Experiment(experiment);
    set((state) => ({
      experiments: [...state.experiments, newExperiment],
    }));
    return newExperiment.id;
  },

  deleteExperiment: (id) =>
    set((state) => ({
      experiments: state.experiments.filter((exp) => exp.id !== id),
    })),

  updateExperiment: (id, updatedFields) =>
    set((state) => ({
      experiments: [...state.experiments, new Experiment(updatedFields)],
    })), //FUTURE FIX
}));

// FUTURE: Utilize the selectors: currently it is not producing the expected information
// and is causing errors when used
export const useSelectors = createSelectors(useExperimentStore);
