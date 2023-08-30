// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/notifications.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { EventType } from "../../commons/audit/event_types_pb.js";
import { FieldValueFilter } from "../../commons/notifications_pb.js";

/**
 * UserSubscription contains the info to send a notification to a user.
 * It contains a user, the event type, a delivery method, and custom app settings.
 *
 * @generated from message api.v1alpha1.org.UserSubscription
 */
export const UserSubscription = proto3.makeMessageType(
  "api.v1alpha1.org.UserSubscription",
  () => [
    { no: 1, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "room303", kind: "message", T: UserSubscription_Room303, oneof: "deliver_method" },
    { no: 4, name: "filters", kind: "message", T: FieldValueFilter, repeated: true },
    { no: 5, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.org.UserSubscription.Room303
 */
export const UserSubscription_Room303 = proto3.makeMessageType(
  "api.v1alpha1.org.UserSubscription.Room303",
  () => [
    { no: 1, name: "room_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "UserSubscription_Room303"},
);

/**
 * Request to add a user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionRequest
 */
export const AddUserSubscriptionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AddUserSubscriptionRequest",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Response to adding a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionResponse
 */
export const AddUserSubscriptionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AddUserSubscriptionResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request to add a user subscription by a specified user with editing users org.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionByUserIdRequest
 */
export const AddUserSubscriptionByUserIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AddUserSubscriptionByUserIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Response to adding a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.AddUserSubscriptionByUserIdResponse
 */
export const AddUserSubscriptionByUserIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AddUserSubscriptionByUserIdResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request for getting a user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionRequest
 */
export const GetUserSubscriptionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSubscriptionRequest",
  () => [
    { no: 1, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for getting a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionResponse
 */
export const GetUserSubscriptionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSubscriptionResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request for getting a user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionByUserIdRequest
 */
export const GetUserSubscriptionByUserIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSubscriptionByUserIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for getting a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.GetUserSubscriptionByUserIdResponse
 */
export const GetUserSubscriptionByUserIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSubscriptionByUserIdResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request for updating a user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionRequest
 */
export const UpdateUserSubscriptionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserSubscriptionRequest",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
    { no: 2, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for updating a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionResponse
 */
export const UpdateUserSubscriptionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserSubscriptionResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request for updating a user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionByUserIdRequest
 */
export const UpdateUserSubscriptionByUserIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserSubscriptionByUserIdRequest",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
    { no: 2, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for updating a user subscription.
 * Contains a single user subscription.
 *
 * @generated from message api.v1alpha1.org.UpdateUserSubscriptionByUserIdResponse
 */
export const UpdateUserSubscriptionByUserIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserSubscriptionByUserIdResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: UserSubscription },
  ],
);

/**
 * Request for removing a user subscription by id.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionRequest
 */
export const RemoveUserSubscriptionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RemoveUserSubscriptionRequest",
  () => [
    { no: 1, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for deleting a user subscription.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionResponse
 */
export const RemoveUserSubscriptionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RemoveUserSubscriptionResponse",
  [],
);

/**
 * Request for removing a user subscription by id.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionByUserIdRequest
 */
export const RemoveUserSubscriptionByUserIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RemoveUserSubscriptionByUserIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subscription_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for deleting a user subscription.
 *
 * @generated from message api.v1alpha1.org.RemoveUserSubscriptionByUserIdResponse
 */
export const RemoveUserSubscriptionByUserIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RemoveUserSubscriptionByUserIdResponse",
  [],
);

/**
 * Request for listing subscriptions for the current user.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsRequest
 */
export const ListUserSubscriptionsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListUserSubscriptionsRequest",
  [],
);

/**
 * Response for listing subscriptions for the current user.
 * Contains a user subscriptions (plural) object.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsResponse
 */
export const ListUserSubscriptionsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListUserSubscriptionsResponse",
  () => [
    { no: 1, name: "subscriptions", kind: "message", T: UserSubscription, repeated: true },
  ],
);

/**
 * Request for listing subscriptions for a given user.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsByUserIdRequest
 */
export const ListUserSubscriptionsByUserIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListUserSubscriptionsByUserIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for listing subscriptions for a given user.
 * Contains a user subscriptions (plural) object.
 *
 * @generated from message api.v1alpha1.org.ListUserSubscriptionsByUserIdResponse
 */
export const ListUserSubscriptionsByUserIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListUserSubscriptionsByUserIdResponse",
  () => [
    { no: 1, name: "subscriptions", kind: "message", T: UserSubscription, repeated: true },
  ],
);

/**
 * Request for listing subscriptions (for many users) for an org.
 *
 * @generated from message api.v1alpha1.org.ListOrgSubscriptionsRequest
 */
export const ListOrgSubscriptionsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListOrgSubscriptionsRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
  ],
);

/**
 * Response for listing subscriptions for multiple users.
 *
 * @generated from message api.v1alpha1.org.ListOrgSubscriptionsResponse
 */
export const ListOrgSubscriptionsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListOrgSubscriptionsResponse",
  () => [
    { no: 1, name: "subscriptions", kind: "message", T: UserSubscription, repeated: true },
  ],
);

