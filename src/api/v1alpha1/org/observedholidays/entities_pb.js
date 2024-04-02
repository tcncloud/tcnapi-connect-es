// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/observedholidays/entities.proto (package api.v1alpha1.org.observedholidays, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { ObservedHoliday, ObservedHolidays } from "../../../commons/org/preferences_pb.js";
import { TimeZone } from "../../../commons/org_pb.js";

/**
 * ListObservedHolidaysRequest is the request message for ListObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.ListObservedHolidaysRequest
 */
export const ListObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.ListObservedHolidaysRequest",
  [],
);

/**
 * ListObservedHolidaysResponse is the response message for ListObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.ListObservedHolidaysResponse
 */
export const ListObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.ListObservedHolidaysResponse",
  () => [
    { no: 1, name: "observed_holidays", kind: "message", T: ObservedHolidays, repeated: true },
  ],
);

/**
 * GetObservedHolidaysRequest is the request message for GetObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.GetObservedHolidaysRequest
 */
export const GetObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.GetObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetObservedHolidaysResponse is the response message for GetObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.GetObservedHolidaysResponse
 */
export const GetObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.GetObservedHolidaysResponse",
  () => [
    { no: 1, name: "observed_holidays", kind: "message", T: ObservedHolidays },
  ],
);

/**
 * SetObservedHolidaysRequest is the request message for SetObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.SetObservedHolidaysRequest
 */
export const SetObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.SetObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timezone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 4, name: "days", kind: "message", T: ObservedHoliday, repeated: true },
  ],
);

/**
 * SetObservedHolidaysResponse is the response message for SetObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.SetObservedHolidaysResponse
 */
export const SetObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.SetObservedHolidaysResponse",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * AddToObservedHolidaysRequest is the request message for AddToObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.AddToObservedHolidaysRequest
 */
export const AddToObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.AddToObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "day", kind: "message", T: ObservedHoliday },
  ],
);

/**
 * AddToObservedHolidaysResponse is the response message for AddToObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.AddToObservedHolidaysResponse
 */
export const AddToObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.AddToObservedHolidaysResponse",
  [],
);

/**
 * RemoveFromObservedHolidaysRequest is request message for RemoveFromObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.RemoveFromObservedHolidaysRequest
 */
export const RemoveFromObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.RemoveFromObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "day", kind: "message", T: ObservedHoliday },
  ],
);

/**
 * RemoveFromObservedHolidaysResponse is the response message for RemoveFromObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.RemoveFromObservedHolidaysResponse
 */
export const RemoveFromObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.RemoveFromObservedHolidaysResponse",
  [],
);

/**
 * UpdateObservedHolidaysInfoRequest is the request message for UpdateObservedHolidaysInfo
 *
 * @generated from message api.v1alpha1.org.observedholidays.UpdateObservedHolidaysInfoRequest
 */
export const UpdateObservedHolidaysInfoRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.UpdateObservedHolidaysInfoRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "observed_holidays_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timezone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 5, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateObservedHolidaysInfoResponse is the response message for UpdateObservedHolidaysInfo
 *
 * @generated from message api.v1alpha1.org.observedholidays.UpdateObservedHolidaysInfoResponse
 */
export const UpdateObservedHolidaysInfoResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.UpdateObservedHolidaysInfoResponse",
  [],
);

/**
 * DeleteObservedHolidaysRequest is the request message for DeleteObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.DeleteObservedHolidaysRequest
 */
export const DeleteObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.DeleteObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteObservedHolidaysResponse is the response message for DeleteObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.DeleteObservedHolidaysResponse
 */
export const DeleteObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.DeleteObservedHolidaysResponse",
  [],
);

/**
 * EvaluateObservedHolidaysRequest is the request message for EvaluateObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.EvaluateObservedHolidaysRequest
 */
export const EvaluateObservedHolidaysRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.EvaluateObservedHolidaysRequest",
  () => [
    { no: 1, name: "observed_holidays_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EvaluateObservedHolidaysResponse is the response message for EvaluateObservedHolidays
 *
 * @generated from message api.v1alpha1.org.observedholidays.EvaluateObservedHolidaysResponse
 */
export const EvaluateObservedHolidaysResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.observedholidays.EvaluateObservedHolidaysResponse",
  () => [
    { no: 1, name: "date_matched", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

