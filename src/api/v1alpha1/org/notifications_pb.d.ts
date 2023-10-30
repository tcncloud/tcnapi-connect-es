// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/notifications.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EventType } from "../../commons/audit/event_types_pb.js";
import type { FieldValueFilter } from "../../commons/notifications_pb.js";

/**
 * UserSubscription contains the info to send a notification to a user.
 * It contains a user, the event type, a delivery method, and custom app settings.
 *
 * @generated from message api.v1alpha1.org.UserSubscription
 */
export declare class UserSubscription extends Message<UserSubscription> {
  /**
   * Required.
   * The unique id given to the setting. Used for updating and deleting.
   *
   * @generated from field: string subscription_id = 1;
   */
  subscriptionId: string;

  /**
   * Required.
   *
   * Used by matrix-notify.
   * It receives an event on a event type and
   * uses it to look up the targets for that event type.
   * e.g. api.commons.audit.EventType_DUMMY_EVENT_DID_SOMETHING
   *
   * @generated from field: api.commons.audit.EventType event_type = 2;
   */
  eventType: EventType;

  /**
   * Required.
   *
   * @generated from field: string user_id = 3;
   */
  userId: string;

  /**
   * Required.
   *
   * @generated from oneof api.v1alpha1.org.UserSubscription.deliver_method
   */
  deliverMethod: {
    /**
     * @generated from field: api.v1alpha1.org.UserSubscription.Room303 room303 = 100;
     */
    value: UserSubscription_Room303;
    case: "room303";
  } | {
    /**
     * TODO: add email, sms, etc.
     *
     * @generated from field: api.v1alpha1.org.UserSubscription.Delivery delivery = 200;
     */
    value: UserSubscription_Delivery;
    case: "delivery";
  } | { case: undefined; value?: undefined };

  /**
   * Optional.
   * If set, user only notified for events that match ALL filters.
   *
   * @generated from field: repeated api.commons.FieldValueFilter filters = 4;
   */
  filters: FieldValueFilter[];

  /**
   * Optional. Updates must specify current version or be rejected.
   *
   * @generated from field: int64 version = 5;
   */
  version: bigint;

  constructor(data?: PartialMessage<UserSubscription>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UserSubscription";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSubscription;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSubscription;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSubscription;

  static equals(a: UserSubscription | PlainMessage<UserSubscription> | undefined, b: UserSubscription | PlainMessage<UserSubscription> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.UserSubscription.Room303
 */
export declare class UserSubscription_Room303 extends Message<UserSubscription_Room303> {
  /**
   * @generated from field: string room_name = 1;
   */
  roomName: string;

  constructor(data?: PartialMessage<UserSubscription_Room303>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UserSubscription.Room303";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSubscription_Room303;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSubscription_Room303;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSubscription_Room303;

  static equals(a: UserSubscription_Room303 | PlainMessage<UserSubscription_Room303> | undefined, b: UserSubscription_Room303 | PlainMessage<UserSubscription_Room303> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.UserSubscription.Delivery
 */
export declare class UserSubscription_Delivery extends Message<UserSubscription_Delivery> {
  /**
   * Required.
   * Used to lookup how the notification is going to happen through Delivery.
   *
   * @generated from field: string transfer_config_name = 1;
   */
  transferConfigName: string;

  constructor(data?: PartialMessage<UserSubscription_Delivery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UserSubscription.Delivery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSubscription_Delivery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSubscription_Delivery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSubscription_Delivery;

  static equals(a: UserSubscription_Delivery | PlainMessage<UserSubscription_Delivery> | undefined, b: UserSubscription_Delivery | PlainMessage<UserSubscription_Delivery> | undefined): boolean;
}

/**
 * Request to add a user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionRequest
 */
export declare class AddUserSubscriptionRequest extends Message<AddUserSubscriptionRequest> {
  /**
   * Required.
   * All fields (except subscription id) must be set.
   *
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<AddUserSubscriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AddUserSubscriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddUserSubscriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddUserSubscriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddUserSubscriptionRequest;

  static equals(a: AddUserSubscriptionRequest | PlainMessage<AddUserSubscriptionRequest> | undefined, b: AddUserSubscriptionRequest | PlainMessage<AddUserSubscriptionRequest> | undefined): boolean;
}

/**
 * Response to adding a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionResponse
 */
export declare class AddUserSubscriptionResponse extends Message<AddUserSubscriptionResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<AddUserSubscriptionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AddUserSubscriptionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddUserSubscriptionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddUserSubscriptionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddUserSubscriptionResponse;

  static equals(a: AddUserSubscriptionResponse | PlainMessage<AddUserSubscriptionResponse> | undefined, b: AddUserSubscriptionResponse | PlainMessage<AddUserSubscriptionResponse> | undefined): boolean;
}

/**
 * Request to add a user subscription by a specified user with editing users org.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionByUserIdRequest
 */
export declare class AddUserSubscriptionByUserIdRequest extends Message<AddUserSubscriptionByUserIdRequest> {
  /**
   * Required.
   * User assigned to subscription
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * All fields (except subscription id) must be set.
   *
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 2;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<AddUserSubscriptionByUserIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AddUserSubscriptionByUserIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddUserSubscriptionByUserIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddUserSubscriptionByUserIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddUserSubscriptionByUserIdRequest;

  static equals(a: AddUserSubscriptionByUserIdRequest | PlainMessage<AddUserSubscriptionByUserIdRequest> | undefined, b: AddUserSubscriptionByUserIdRequest | PlainMessage<AddUserSubscriptionByUserIdRequest> | undefined): boolean;
}

/**
 * Response to adding a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionByUserIdResponse
 */
export declare class AddUserSubscriptionByUserIdResponse extends Message<AddUserSubscriptionByUserIdResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<AddUserSubscriptionByUserIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AddUserSubscriptionByUserIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddUserSubscriptionByUserIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddUserSubscriptionByUserIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddUserSubscriptionByUserIdResponse;

  static equals(a: AddUserSubscriptionByUserIdResponse | PlainMessage<AddUserSubscriptionByUserIdResponse> | undefined, b: AddUserSubscriptionByUserIdResponse | PlainMessage<AddUserSubscriptionByUserIdResponse> | undefined): boolean;
}

/**
 * Request for getting a user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionRequest
 */
export declare class GetUserSubscriptionRequest extends Message<GetUserSubscriptionRequest> {
  /**
   * Required.
   *
   * @generated from field: string subscription_id = 1;
   */
  subscriptionId: string;

  constructor(data?: PartialMessage<GetUserSubscriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetUserSubscriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSubscriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSubscriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSubscriptionRequest;

  static equals(a: GetUserSubscriptionRequest | PlainMessage<GetUserSubscriptionRequest> | undefined, b: GetUserSubscriptionRequest | PlainMessage<GetUserSubscriptionRequest> | undefined): boolean;
}

/**
 * Response for getting a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionResponse
 */
export declare class GetUserSubscriptionResponse extends Message<GetUserSubscriptionResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<GetUserSubscriptionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetUserSubscriptionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSubscriptionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSubscriptionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSubscriptionResponse;

  static equals(a: GetUserSubscriptionResponse | PlainMessage<GetUserSubscriptionResponse> | undefined, b: GetUserSubscriptionResponse | PlainMessage<GetUserSubscriptionResponse> | undefined): boolean;
}

/**
 * Request for getting a user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionByUserIdRequest
 */
export declare class GetUserSubscriptionByUserIdRequest extends Message<GetUserSubscriptionByUserIdRequest> {
  /**
   * Required.
   * User assigned to subscription
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Required.
   *
   * @generated from field: string subscription_id = 2;
   */
  subscriptionId: string;

  constructor(data?: PartialMessage<GetUserSubscriptionByUserIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetUserSubscriptionByUserIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSubscriptionByUserIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSubscriptionByUserIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSubscriptionByUserIdRequest;

  static equals(a: GetUserSubscriptionByUserIdRequest | PlainMessage<GetUserSubscriptionByUserIdRequest> | undefined, b: GetUserSubscriptionByUserIdRequest | PlainMessage<GetUserSubscriptionByUserIdRequest> | undefined): boolean;
}

/**
 * Response for getting a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionByUserIdResponse
 */
export declare class GetUserSubscriptionByUserIdResponse extends Message<GetUserSubscriptionByUserIdResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<GetUserSubscriptionByUserIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetUserSubscriptionByUserIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSubscriptionByUserIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSubscriptionByUserIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSubscriptionByUserIdResponse;

  static equals(a: GetUserSubscriptionByUserIdResponse | PlainMessage<GetUserSubscriptionByUserIdResponse> | undefined, b: GetUserSubscriptionByUserIdResponse | PlainMessage<GetUserSubscriptionByUserIdResponse> | undefined): boolean;
}

/**
 * Request for updating a user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionRequest
 */
export declare class UpdateUserSubscriptionRequest extends Message<UpdateUserSubscriptionRequest> {
  /**
   * Required.
   * Must have org id, user id, and subscription id.
   *
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  /**
   * Required. Only fields in field mask will be updated.
   * Valid fields include: "filters", "room303"
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 2;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateUserSubscriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateUserSubscriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserSubscriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionRequest;

  static equals(a: UpdateUserSubscriptionRequest | PlainMessage<UpdateUserSubscriptionRequest> | undefined, b: UpdateUserSubscriptionRequest | PlainMessage<UpdateUserSubscriptionRequest> | undefined): boolean;
}

/**
 * Response for updating a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionResponse
 */
export declare class UpdateUserSubscriptionResponse extends Message<UpdateUserSubscriptionResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<UpdateUserSubscriptionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateUserSubscriptionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserSubscriptionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionResponse;

  static equals(a: UpdateUserSubscriptionResponse | PlainMessage<UpdateUserSubscriptionResponse> | undefined, b: UpdateUserSubscriptionResponse | PlainMessage<UpdateUserSubscriptionResponse> | undefined): boolean;
}

/**
 * Request for updating a user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionByUserIdRequest
 */
export declare class UpdateUserSubscriptionByUserIdRequest extends Message<UpdateUserSubscriptionByUserIdRequest> {
  /**
   * Required.
   * Must have org id, user id, and subscription id.
   *
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  /**
   * Required. Only fields in field mask will be updated.
   * Valid fields include: "filters", "room303"
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 2;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateUserSubscriptionByUserIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateUserSubscriptionByUserIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserSubscriptionByUserIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionByUserIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionByUserIdRequest;

  static equals(a: UpdateUserSubscriptionByUserIdRequest | PlainMessage<UpdateUserSubscriptionByUserIdRequest> | undefined, b: UpdateUserSubscriptionByUserIdRequest | PlainMessage<UpdateUserSubscriptionByUserIdRequest> | undefined): boolean;
}

/**
 * Response for updating a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionByUserIdResponse
 */
export declare class UpdateUserSubscriptionByUserIdResponse extends Message<UpdateUserSubscriptionByUserIdResponse> {
  /**
   * @generated from field: api.v1alpha1.org.UserSubscription subscription = 1;
   */
  subscription?: UserSubscription;

  constructor(data?: PartialMessage<UpdateUserSubscriptionByUserIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateUserSubscriptionByUserIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUserSubscriptionByUserIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionByUserIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUserSubscriptionByUserIdResponse;

  static equals(a: UpdateUserSubscriptionByUserIdResponse | PlainMessage<UpdateUserSubscriptionByUserIdResponse> | undefined, b: UpdateUserSubscriptionByUserIdResponse | PlainMessage<UpdateUserSubscriptionByUserIdResponse> | undefined): boolean;
}

/**
 * Request for removing a user subscription by id.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionRequest
 */
export declare class RemoveUserSubscriptionRequest extends Message<RemoveUserSubscriptionRequest> {
  /**
   * Required.
   *
   * @generated from field: string subscription_id = 1;
   */
  subscriptionId: string;

  constructor(data?: PartialMessage<RemoveUserSubscriptionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RemoveUserSubscriptionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveUserSubscriptionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionRequest;

  static equals(a: RemoveUserSubscriptionRequest | PlainMessage<RemoveUserSubscriptionRequest> | undefined, b: RemoveUserSubscriptionRequest | PlainMessage<RemoveUserSubscriptionRequest> | undefined): boolean;
}

/**
 * Response for deleting a user subscription.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionResponse
 */
export declare class RemoveUserSubscriptionResponse extends Message<RemoveUserSubscriptionResponse> {
  constructor(data?: PartialMessage<RemoveUserSubscriptionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RemoveUserSubscriptionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveUserSubscriptionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionResponse;

  static equals(a: RemoveUserSubscriptionResponse | PlainMessage<RemoveUserSubscriptionResponse> | undefined, b: RemoveUserSubscriptionResponse | PlainMessage<RemoveUserSubscriptionResponse> | undefined): boolean;
}

/**
 * Request for removing a user subscription by id.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionByUserIdRequest
 */
export declare class RemoveUserSubscriptionByUserIdRequest extends Message<RemoveUserSubscriptionByUserIdRequest> {
  /**
   * Required.
   * Primary key for subscriptions.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * Required.
   *
   * @generated from field: string subscription_id = 2;
   */
  subscriptionId: string;

  constructor(data?: PartialMessage<RemoveUserSubscriptionByUserIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RemoveUserSubscriptionByUserIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveUserSubscriptionByUserIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionByUserIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionByUserIdRequest;

  static equals(a: RemoveUserSubscriptionByUserIdRequest | PlainMessage<RemoveUserSubscriptionByUserIdRequest> | undefined, b: RemoveUserSubscriptionByUserIdRequest | PlainMessage<RemoveUserSubscriptionByUserIdRequest> | undefined): boolean;
}

/**
 * Response for deleting a user subscription.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionByUserIdResponse
 */
export declare class RemoveUserSubscriptionByUserIdResponse extends Message<RemoveUserSubscriptionByUserIdResponse> {
  constructor(data?: PartialMessage<RemoveUserSubscriptionByUserIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RemoveUserSubscriptionByUserIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveUserSubscriptionByUserIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionByUserIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveUserSubscriptionByUserIdResponse;

  static equals(a: RemoveUserSubscriptionByUserIdResponse | PlainMessage<RemoveUserSubscriptionByUserIdResponse> | undefined, b: RemoveUserSubscriptionByUserIdResponse | PlainMessage<RemoveUserSubscriptionByUserIdResponse> | undefined): boolean;
}

/**
 * Request for listing subscriptions for the current user.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsRequest
 */
export declare class ListUserSubscriptionsRequest extends Message<ListUserSubscriptionsRequest> {
  constructor(data?: PartialMessage<ListUserSubscriptionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListUserSubscriptionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserSubscriptionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserSubscriptionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserSubscriptionsRequest;

  static equals(a: ListUserSubscriptionsRequest | PlainMessage<ListUserSubscriptionsRequest> | undefined, b: ListUserSubscriptionsRequest | PlainMessage<ListUserSubscriptionsRequest> | undefined): boolean;
}

/**
 * Response for listing subscriptions for the current user.
 * Contains a user subscriptions (plural) object.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsResponse
 */
export declare class ListUserSubscriptionsResponse extends Message<ListUserSubscriptionsResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.UserSubscription subscriptions = 1;
   */
  subscriptions: UserSubscription[];

  constructor(data?: PartialMessage<ListUserSubscriptionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListUserSubscriptionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserSubscriptionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserSubscriptionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserSubscriptionsResponse;

  static equals(a: ListUserSubscriptionsResponse | PlainMessage<ListUserSubscriptionsResponse> | undefined, b: ListUserSubscriptionsResponse | PlainMessage<ListUserSubscriptionsResponse> | undefined): boolean;
}

/**
 * Request for listing subscriptions for a given user.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsByUserIdRequest
 */
export declare class ListUserSubscriptionsByUserIdRequest extends Message<ListUserSubscriptionsByUserIdRequest> {
  /**
   * Required.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<ListUserSubscriptionsByUserIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListUserSubscriptionsByUserIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserSubscriptionsByUserIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserSubscriptionsByUserIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserSubscriptionsByUserIdRequest;

  static equals(a: ListUserSubscriptionsByUserIdRequest | PlainMessage<ListUserSubscriptionsByUserIdRequest> | undefined, b: ListUserSubscriptionsByUserIdRequest | PlainMessage<ListUserSubscriptionsByUserIdRequest> | undefined): boolean;
}

/**
 * Response for listing subscriptions for a given user.
 * Contains a user subscriptions (plural) object.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsByUserIdResponse
 */
export declare class ListUserSubscriptionsByUserIdResponse extends Message<ListUserSubscriptionsByUserIdResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.UserSubscription subscriptions = 1;
   */
  subscriptions: UserSubscription[];

  constructor(data?: PartialMessage<ListUserSubscriptionsByUserIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListUserSubscriptionsByUserIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUserSubscriptionsByUserIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUserSubscriptionsByUserIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUserSubscriptionsByUserIdResponse;

  static equals(a: ListUserSubscriptionsByUserIdResponse | PlainMessage<ListUserSubscriptionsByUserIdResponse> | undefined, b: ListUserSubscriptionsByUserIdResponse | PlainMessage<ListUserSubscriptionsByUserIdResponse> | undefined): boolean;
}

/**
 * Request for listing subscriptions (for many users) for an org.
 *
 * @generated from message api.v1alpha1.org.ListOrgSubscriptionsRequest
 */
export declare class ListOrgSubscriptionsRequest extends Message<ListOrgSubscriptionsRequest> {
  /**
   * Required.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Optional.
   * Used by matrix-notify to get settings in bulk for a particular event type.
   *
   * @generated from field: api.commons.audit.EventType event_type = 2;
   */
  eventType: EventType;

  constructor(data?: PartialMessage<ListOrgSubscriptionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrgSubscriptionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrgSubscriptionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrgSubscriptionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrgSubscriptionsRequest;

  static equals(a: ListOrgSubscriptionsRequest | PlainMessage<ListOrgSubscriptionsRequest> | undefined, b: ListOrgSubscriptionsRequest | PlainMessage<ListOrgSubscriptionsRequest> | undefined): boolean;
}

/**
 * Response for listing subscriptions for multiple users.
 *
 * @generated from message api.v1alpha1.org.ListOrgSubscriptionsResponse
 */
export declare class ListOrgSubscriptionsResponse extends Message<ListOrgSubscriptionsResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.UserSubscription subscriptions = 1;
   */
  subscriptions: UserSubscription[];

  constructor(data?: PartialMessage<ListOrgSubscriptionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrgSubscriptionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrgSubscriptionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrgSubscriptionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrgSubscriptionsResponse;

  static equals(a: ListOrgSubscriptionsResponse | PlainMessage<ListOrgSubscriptionsResponse> | undefined, b: ListOrgSubscriptionsResponse | PlainMessage<ListOrgSubscriptionsResponse> | undefined): boolean;
}

