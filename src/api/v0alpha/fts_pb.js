// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v0alpha/fts.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v0alpha.GetUploadFileUrlReq
 */
export const GetUploadFileUrlReq = proto3.makeMessageType(
  "api.v0alpha.GetUploadFileUrlReq",
  () => [
    { no: 5, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.GetUploadFileUrlRes
 */
export const GetUploadFileUrlRes = proto3.makeMessageType(
  "api.v0alpha.GetUploadFileUrlRes",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

