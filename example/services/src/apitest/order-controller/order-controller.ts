import "./type";
import { ResType } from "../lib/types/base.d";
import request from "@/utils/request";

//listOrderInfo
export function* listOrderInfoUsingGET(): ResType<{}> {
  const res = yield request.get("/order/listOrderInfo");
  return res;
}