// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/businesshours/entities.proto (package api.v1alpha1.org.businesshours, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BusinessHours, DayInterval } from "../../../commons/org/preferences_pb.js";
import type { TimeZone } from "../../../commons/org_pb.js";

/**
 * Request for listing business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.ListBusinessHoursRequest
 */
export declare class ListBusinessHoursRequest extends Message<ListBusinessHoursRequest> {
  constructor(data?: PartialMessage<ListBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.ListBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBusinessHoursRequest;

  static equals(a: ListBusinessHoursRequest | PlainMessage<ListBusinessHoursRequest> | undefined, b: ListBusinessHoursRequest | PlainMessage<ListBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for listing business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.ListBusinessHoursResponse
 */
export declare class ListBusinessHoursResponse extends Message<ListBusinessHoursResponse> {
  /**
   * The list of business hours
   *
   * @generated from field: repeated api.commons.org.BusinessHours business_hours = 1;
   */
  businessHours: BusinessHours[];

  constructor(data?: PartialMessage<ListBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.ListBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBusinessHoursResponse;

  static equals(a: ListBusinessHoursResponse | PlainMessage<ListBusinessHoursResponse> | undefined, b: ListBusinessHoursResponse | PlainMessage<ListBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for fetching a business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.GetBusinessHoursRequest
 */
export declare class GetBusinessHoursRequest extends Message<GetBusinessHoursRequest> {
  /**
   * The id of the business hours object
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  constructor(data?: PartialMessage<GetBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.GetBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBusinessHoursRequest;

  static equals(a: GetBusinessHoursRequest | PlainMessage<GetBusinessHoursRequest> | undefined, b: GetBusinessHoursRequest | PlainMessage<GetBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for fetching a business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.GetBusinessHoursResponse
 */
export declare class GetBusinessHoursResponse extends Message<GetBusinessHoursResponse> {
  /**
   * The retrieved business hours
   *
   * @generated from field: api.commons.org.BusinessHours business_hours = 1;
   */
  businessHours?: BusinessHours;

  constructor(data?: PartialMessage<GetBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.GetBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBusinessHoursResponse;

  static equals(a: GetBusinessHoursResponse | PlainMessage<GetBusinessHoursResponse> | undefined, b: GetBusinessHoursResponse | PlainMessage<GetBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for initializing a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.SetBusinessHoursRequest
 */
export declare class SetBusinessHoursRequest extends Message<SetBusinessHoursRequest> {
  /**
   * The name of the business hours
   *
   * @generated from field: string business_hours_name = 1;
   */
  businessHoursName: string;

  /**
   * The description of the business hours
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * The list of day intervals for the business hours
   *
   * @generated from field: repeated api.commons.org.DayInterval day_intervals = 3;
   */
  dayIntervals: DayInterval[];

  /**
   * The timezone of the business hours
   *
   * @generated from field: api.commons.TimeZone timezone = 4;
   */
  timezone: TimeZone;

  constructor(data?: PartialMessage<SetBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.SetBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBusinessHoursRequest;

  static equals(a: SetBusinessHoursRequest | PlainMessage<SetBusinessHoursRequest> | undefined, b: SetBusinessHoursRequest | PlainMessage<SetBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for initializing a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.SetBusinessHoursResponse
 */
export declare class SetBusinessHoursResponse extends Message<SetBusinessHoursResponse> {
  /**
   * The id of the new business hours
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  constructor(data?: PartialMessage<SetBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.SetBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetBusinessHoursResponse;

  static equals(a: SetBusinessHoursResponse | PlainMessage<SetBusinessHoursResponse> | undefined, b: SetBusinessHoursResponse | PlainMessage<SetBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for adding an interval to a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.AddIntervalToBusinessHoursRequest
 */
export declare class AddIntervalToBusinessHoursRequest extends Message<AddIntervalToBusinessHoursRequest> {
  /**
   * The id of the business hours to add an interval
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  /**
   * The day interval to be added
   *
   * @generated from field: api.commons.org.DayInterval day_interval = 2;
   */
  dayInterval?: DayInterval;

  constructor(data?: PartialMessage<AddIntervalToBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.AddIntervalToBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddIntervalToBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddIntervalToBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddIntervalToBusinessHoursRequest;

  static equals(a: AddIntervalToBusinessHoursRequest | PlainMessage<AddIntervalToBusinessHoursRequest> | undefined, b: AddIntervalToBusinessHoursRequest | PlainMessage<AddIntervalToBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for adding an interval to a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.AddIntervalToBusinessHoursResponse
 */
export declare class AddIntervalToBusinessHoursResponse extends Message<AddIntervalToBusinessHoursResponse> {
  constructor(data?: PartialMessage<AddIntervalToBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.AddIntervalToBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddIntervalToBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddIntervalToBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddIntervalToBusinessHoursResponse;

  static equals(a: AddIntervalToBusinessHoursResponse | PlainMessage<AddIntervalToBusinessHoursResponse> | undefined, b: AddIntervalToBusinessHoursResponse | PlainMessage<AddIntervalToBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for removing an interval from a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.RemoveIntervalFromBusinessHoursRequest
 */
export declare class RemoveIntervalFromBusinessHoursRequest extends Message<RemoveIntervalFromBusinessHoursRequest> {
  /**
   * The id of the business hours to remove an interval
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  /**
   * The day interval to be removed
   *
   * @generated from field: api.commons.org.DayInterval day_interval = 2;
   */
  dayInterval?: DayInterval;

  constructor(data?: PartialMessage<RemoveIntervalFromBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.RemoveIntervalFromBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveIntervalFromBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveIntervalFromBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveIntervalFromBusinessHoursRequest;

  static equals(a: RemoveIntervalFromBusinessHoursRequest | PlainMessage<RemoveIntervalFromBusinessHoursRequest> | undefined, b: RemoveIntervalFromBusinessHoursRequest | PlainMessage<RemoveIntervalFromBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for removing an interval from a business hours object
 *
 * @generated from message api.v1alpha1.org.businesshours.RemoveIntervalFromBusinessHoursResponse
 */
export declare class RemoveIntervalFromBusinessHoursResponse extends Message<RemoveIntervalFromBusinessHoursResponse> {
  constructor(data?: PartialMessage<RemoveIntervalFromBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.RemoveIntervalFromBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveIntervalFromBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveIntervalFromBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveIntervalFromBusinessHoursResponse;

  static equals(a: RemoveIntervalFromBusinessHoursResponse | PlainMessage<RemoveIntervalFromBusinessHoursResponse> | undefined, b: RemoveIntervalFromBusinessHoursResponse | PlainMessage<RemoveIntervalFromBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for updating the business hours info
 *
 * @generated from message api.v1alpha1.org.businesshours.UpdateBusinessHoursInfoRequest
 */
export declare class UpdateBusinessHoursInfoRequest extends Message<UpdateBusinessHoursInfoRequest> {
  /**
   * The id of the business hours object
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  /**
   * The updated name of the business hours
   *
   * @generated from field: string business_hours_name = 2;
   */
  businessHoursName: string;

  /**
   * The updated description of the business hours
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * The updated timezone of the business hours
   *
   * @generated from field: api.commons.TimeZone timezone = 4;
   */
  timezone: TimeZone;

  /**
   * Field mask for the update request
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 5;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateBusinessHoursInfoRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.UpdateBusinessHoursInfoRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBusinessHoursInfoRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBusinessHoursInfoRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBusinessHoursInfoRequest;

  static equals(a: UpdateBusinessHoursInfoRequest | PlainMessage<UpdateBusinessHoursInfoRequest> | undefined, b: UpdateBusinessHoursInfoRequest | PlainMessage<UpdateBusinessHoursInfoRequest> | undefined): boolean;
}

/**
 * Response for updating the business hours info
 *
 * @generated from message api.v1alpha1.org.businesshours.UpdateBusinessHoursInfoResponse
 */
export declare class UpdateBusinessHoursInfoResponse extends Message<UpdateBusinessHoursInfoResponse> {
  constructor(data?: PartialMessage<UpdateBusinessHoursInfoResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.UpdateBusinessHoursInfoResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBusinessHoursInfoResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBusinessHoursInfoResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBusinessHoursInfoResponse;

  static equals(a: UpdateBusinessHoursInfoResponse | PlainMessage<UpdateBusinessHoursInfoResponse> | undefined, b: UpdateBusinessHoursInfoResponse | PlainMessage<UpdateBusinessHoursInfoResponse> | undefined): boolean;
}

/**
 * Request for deleting business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.DeleteBusinessHoursRequest
 */
export declare class DeleteBusinessHoursRequest extends Message<DeleteBusinessHoursRequest> {
  /**
   * The id of the business hours object to be deleted
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  constructor(data?: PartialMessage<DeleteBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.DeleteBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBusinessHoursRequest;

  static equals(a: DeleteBusinessHoursRequest | PlainMessage<DeleteBusinessHoursRequest> | undefined, b: DeleteBusinessHoursRequest | PlainMessage<DeleteBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for deleting business hours.
 *
 * @generated from message api.v1alpha1.org.businesshours.DeleteBusinessHoursResponse
 */
export declare class DeleteBusinessHoursResponse extends Message<DeleteBusinessHoursResponse> {
  constructor(data?: PartialMessage<DeleteBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.DeleteBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBusinessHoursResponse;

  static equals(a: DeleteBusinessHoursResponse | PlainMessage<DeleteBusinessHoursResponse> | undefined, b: DeleteBusinessHoursResponse | PlainMessage<DeleteBusinessHoursResponse> | undefined): boolean;
}

/**
 * Request for EvaluateBusinessHours
 *
 * @generated from message api.v1alpha1.org.businesshours.EvaluateBusinessHoursRequest
 */
export declare class EvaluateBusinessHoursRequest extends Message<EvaluateBusinessHoursRequest> {
  /**
   * The id of the business hours to evaluate
   *
   * @generated from field: string business_hours_id = 1;
   */
  businessHoursId: string;

  constructor(data?: PartialMessage<EvaluateBusinessHoursRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.EvaluateBusinessHoursRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvaluateBusinessHoursRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvaluateBusinessHoursRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvaluateBusinessHoursRequest;

  static equals(a: EvaluateBusinessHoursRequest | PlainMessage<EvaluateBusinessHoursRequest> | undefined, b: EvaluateBusinessHoursRequest | PlainMessage<EvaluateBusinessHoursRequest> | undefined): boolean;
}

/**
 * Response for EvaluateBusinessHours
 *
 * @generated from message api.v1alpha1.org.businesshours.EvaluateBusinessHoursResponse
 */
export declare class EvaluateBusinessHoursResponse extends Message<EvaluateBusinessHoursResponse> {
  /**
   * Resulting boolean if the current time is within
   * a day interval of a business hours object
   *
   * @generated from field: bool within_range = 1;
   */
  withinRange: boolean;

  constructor(data?: PartialMessage<EvaluateBusinessHoursResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.businesshours.EvaluateBusinessHoursResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvaluateBusinessHoursResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvaluateBusinessHoursResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvaluateBusinessHoursResponse;

  static equals(a: EvaluateBusinessHoursResponse | PlainMessage<EvaluateBusinessHoursResponse> | undefined, b: EvaluateBusinessHoursResponse | PlainMessage<EvaluateBusinessHoursResponse> | undefined): boolean;
}

