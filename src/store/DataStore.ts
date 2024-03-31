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

  title: string;
  setTitle: (title: string) => void;

  selectedData: string[];
  setSelectedData: (data: string[]) => void;

  zemaTitle: string;
  setZemaTitle: (zema: string) => void;
}

const dataStore = create<Store>((set) => ({
  data: [],
  setData: (data: Data[]) => set({ data }),

  title: "",
  setTitle: (title: string) => set({ title }),

  selectedData: [],
  setSelectedData: (selectedData: string[]) => set({ selectedData }),

  zemaTitle: "",
  setZemaTitle: (zemaTitle: string) => set({ zemaTitle }),
}));

export default dataStore;
