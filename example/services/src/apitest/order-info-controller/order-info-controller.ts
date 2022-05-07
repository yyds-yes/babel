import { User } from "./type";
import { ResType } from "../lib/types/base.d";
import request from "@/utils/request";

interface test3UsingGETParams {
  age?: string;
  name?: string;
}

interface test2UsingGETParams {
  age?: string;
  name?: string;
}

interface testUsingGETParams {
  age?: string;
  name?: string;
}

//test
export function* testUsingGET(params: testUsingGETParams): ResType<{}> {
  const res = yield request.get("/demo/test", {
    params: params
  });

  return res;
}

//测试接口
export function* test1UsingGET(data: OrderReq): ResType<{}> {
  const res = yield request.get("/demo/test1", {
    data: data
  });

  return res;
}

//test2
export function* test2UsingGET(params: test2UsingGETParams): ResType<{}> {
  const res = yield request.get("/demo/test2", {
    params: params
  });

  return res;
}

//test3
export function* test3UsingGET(params: test3UsingGETParams): ResType<User> {
  const res = yield request.get("/demo/test3", {
    params: params
  });

  return res;
}

//test4
export function* test4UsingGET(): ResType<{}> {
  const res = yield request.get("/demo/test4");
  return res;
}

//test5
export function* test5UsingGET(): ResType<{}> {
  const res = yield request.get("/demo/test5");
  return res;
}

//test6
export function* test6UsingGET(): ResType<{}> {
  const res = yield request.get("/demo/test6");
  return res;
}