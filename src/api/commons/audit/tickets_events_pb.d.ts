// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/audit/tickets_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EditTicket } from "../tickets_pb.js";

/**
 * @generated from message api.commons.audit.TicketEvent
 */
export declare class TicketEvent extends Message<TicketEvent> {
  /**
   * update ticket
   *
   * @generated from field: api.commons.EditTicket editticket = 1;
   */
  editticket?: EditTicket;

  /**
   * @generated from field: string created_by_id = 2;
   */
  createdById: string;

  constructor(data?: PartialMessage<TicketEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.TicketEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TicketEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TicketEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TicketEvent;

  static equals(a: TicketEvent | PlainMessage<TicketEvent> | undefined, b: TicketEvent | PlainMessage<TicketEvent> | undefined): boolean;
}

