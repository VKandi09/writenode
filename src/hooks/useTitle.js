import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - WordNode`;
    }, [title]);

    return null;
}