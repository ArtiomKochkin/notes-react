import { rootActions } from "@/app/providers/StoreProvider";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch);
    }, [dispatch]);
}