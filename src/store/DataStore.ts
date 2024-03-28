import { create } from "zustand";

interface Data {
  title: string;
  name: string;
  imageUrl: string;
  subTitle: string;
  data: string[];
}

interface Store {
  data: Data[];
  setData: (data: Data[]) => void;
  selectedData: string[];
  setSelectedData: (data: string[]) => void;
}

const dataStore = create<Store>((set) => ({
  data: [],
  setData: (data: Data[]) => set({ data }),
  selectedData: [],
  setSelectedData: (selectedData: string[]) => set({ selectedData }),
}));

export default dataStore;
