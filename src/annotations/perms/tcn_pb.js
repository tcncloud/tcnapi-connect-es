// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file annotations/perms/tcn.proto (package annotations.perms, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import { EnumValueOptions, proto2 } from "@bufbuild/protobuf";
import { Application, Card } from "./license_pb.js";

/**
 * Tcn defines the enum value annotations which will be used for permissions.
 *
 * @generated from message annotations.perms.Tcn
 */
export const Tcn = proto2.makeMessageType(
  "annotations.perms.Tcn",
  () => [
    { no: 1, name: "wip", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "app", kind: "enum", T: proto2.getEnumType(Application), opt: true },
    { no: 3, name: "card", kind: "enum", T: proto2.getEnumType(Card), opt: true },
    { no: 4, name: "features", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Options contain the permission annotation properties.
 *
 * @generated from extension: optional annotations.perms.Tcn options = 50001;
 */
export const options = proto2.makeExtension(
  "annotations.perms.options", 
  EnumValueOptions, 
  () => ({ no: 50001, kind: "message", T: Tcn, opt: true }),
);

