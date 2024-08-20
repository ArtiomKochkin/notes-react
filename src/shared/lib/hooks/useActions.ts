import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { rootActions } from "@/app/providers/StoreProvider";

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch);
    }, [dispatch]);
}