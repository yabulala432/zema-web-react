import { create } from "zustand";

export interface Data {
  title: string;
  name: string;
  imageUrl: string;
  subTitle: string;
  data: string[];
  pdf: string;
  song: string;
  expandPanel: boolean;
  setExpandPanel: (expandPanel: boolean) => void;
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

  pdf: string;
  setPdf: (pdf: string) => void;

  song: string;
  setSong: (song: string) => void;

  expandPanel: boolean;
  setExpandPanel: (expandPanel: boolean) => void;
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

  pdf: "",
  setPdf: (pdf: string) => set({ pdf }),

  song: "",
  setSong: (song: string) => set({ song }),

  expandPanel: true,
  setExpandPanel: (expandPanel: boolean) => set({ expandPanel }),
}));

export default dataStore;
