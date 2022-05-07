<h1 align="center">recast-generator-tsapi</h1>

### 实现功能

- 根据 swagger 接口文档生成前端 services、interface 等 ts 声明代码

### Use bash

```
$ yarn install or npm install --save

$ npm run tsapi

```

### dependences

```
@types/node": "^14.14.6",
    "ajv": "^8.11.0",
    "assert": "^2.0.0",
    "ast-types": "^0.14.2",
    "aws4": "^1.11.0",
    "babel-preset-es2015": "^6.24.1",
    "eslint": "^7.12.1",
    "flow-parser": "^0.137.0",
    "lint-staged": "^10.5.1",
    "mime-types": "^2.1.35",
    "prettier": "^2.1.2",
    "qoa": "^0.2.0",
    "recast": "^0.20.4",
    "reify": "^0.20.12",
    "request": "^2.88.2",
    "swagger-parser": "^10.0.3",
    "swagger-typescript-api": "^9.3.1",
    "ts-emit-clean": "^1.0.0",
    "ts-node": "^9.1.1",
    "tsc": "^1.20150623.0",
    "tslib": "^2.0.3",
    "typescript": "^4.0.5

```

### Logs

```
//成功写入 service.ts！
import { ResType } from "@/types";
import request from "@/utils/request";

//Get listOrderInfo
export function* listOrderInfoUsingGET(): ResType<{}> {
  const res = yield request.get("/order/listOrderInfo");
  return res;
}

// 成功写入interface
export interface OrderReq {
  name: string;
  price: number;
}

export interface User {
  age: string;
  name: string;
}
```
