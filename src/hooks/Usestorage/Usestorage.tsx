import { Dispatch, SetStateAction, useEffect, useState } from "react";

function toString(item: any) {
  if(typeof item == "object") {
    return JSON.stringify(item);
  };

  return `undefined`;
};

function toJson(item: any) {
  try {
    return JSON.parse(item);
  } catch (error) {
    return item;  
  };
};

export default function useStorage<T>(name: string, def: T, restore?: boolean): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(( ) => {
    let storagedItem = window.localStorage.getItem(name);

    if(restore) {
      storagedItem = JSON.stringify(def);
      window.localStorage.setItem(name, storagedItem);
    };

    return toJson(storagedItem || def);
  });

  useEffect(( ) => {
    window.localStorage.setItem(name, toString(state));
  }, [name, state]);

  return [state, setState];
};