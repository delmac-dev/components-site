import { createContext, useContext } from "react";

export const LayoutContext = createContext(null);

export const useLayoutContext = () => {
    const layoutContext = useContext(LayoutContext);

    if(layoutContext === undefined) {
        throw Error("context must be used in a LayoutContext provider");
    }

    return layoutContext;
}