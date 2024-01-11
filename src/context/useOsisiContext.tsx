import { createContext, useContext } from "react";


export type GlobalContent = {
  OSISI_URL: string
}
export const osisiContext = createContext<GlobalContent>({
  OSISI_URL: ""
});

export function useOsisiContext() {
  const context = useContext(osisiContext);
  return context;
}