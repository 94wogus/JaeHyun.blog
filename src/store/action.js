import { BASE_URL, METHOD, request, packUrl } from "@/utils/api";
import Constant from "./constant"

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}
