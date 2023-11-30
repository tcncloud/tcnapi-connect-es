// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file annotations/perms/tcn.proto (package annotations.perms, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import type { Application, Card } from "./license_pb.js";

/**
 * Tcn defines the enum value annotations which will be used for permissions.
 *
 * @generated from message annotations.perms.Tcn
 */
export declare class Tcn extends Message<Tcn> {
  /**
   * Work-in-progress tag. Used to delineate permissions that are not
   * yet ready to go live. Previously known as "A la carte" permissions
   * in the legacy customer support licensing tool.
   *
   * @generated from field: optional bool wip = 1;
   */
  wip?: boolean;

  /**
   * Application which the permission will be grouped under.
   *
   * @generated from field: optional annotations.perms.Application app = 2;
   */
  app?: Application;

  /**
   * The card/sub-app section which it's assigned to.
   * If no card is provided, it will go under the application's default
   * card (under the same name as the app).
   *
   * @generated from field: optional annotations.perms.Card card = 3;
   */
  card?: Card;

  /**
   * The list of features or effects the permission grants.
   *
   * @generated from field: repeated string features = 4;
   */
  features: string[];

  constructor(data?: PartialMessage<Tcn>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "annotations.perms.Tcn";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tcn;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tcn;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tcn;

  static equals(a: Tcn | PlainMessage<Tcn> | undefined, b: Tcn | PlainMessage<Tcn> | undefined): boolean;
}

