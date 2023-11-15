// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/plans.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BillingPlan } from "../entities/v1alpha1/plan_pb.js";
import type { Page, Sort } from "./core_pb.js";

/**
 * @generated from message services.billing.v1alpha1.CommitBillingPlanRequest
 */
export declare class CommitBillingPlanRequest extends Message<CommitBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<CommitBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CommitBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitBillingPlanRequest;

  static equals(a: CommitBillingPlanRequest | PlainMessage<CommitBillingPlanRequest> | undefined, b: CommitBillingPlanRequest | PlainMessage<CommitBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CommitBillingPlanResponse
 */
export declare class CommitBillingPlanResponse extends Message<CommitBillingPlanResponse> {
  constructor(data?: PartialMessage<CommitBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CommitBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitBillingPlanResponse;

  static equals(a: CommitBillingPlanResponse | PlainMessage<CommitBillingPlanResponse> | undefined, b: CommitBillingPlanResponse | PlainMessage<CommitBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CommitDefaultBillingPlanRequest
 */
export declare class CommitDefaultBillingPlanRequest extends Message<CommitDefaultBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<CommitDefaultBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CommitDefaultBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitDefaultBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitDefaultBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitDefaultBillingPlanRequest;

  static equals(a: CommitDefaultBillingPlanRequest | PlainMessage<CommitDefaultBillingPlanRequest> | undefined, b: CommitDefaultBillingPlanRequest | PlainMessage<CommitDefaultBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CommitDefaultBillingPlanResponse
 */
export declare class CommitDefaultBillingPlanResponse extends Message<CommitDefaultBillingPlanResponse> {
  constructor(data?: PartialMessage<CommitDefaultBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CommitDefaultBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommitDefaultBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommitDefaultBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommitDefaultBillingPlanResponse;

  static equals(a: CommitDefaultBillingPlanResponse | PlainMessage<CommitDefaultBillingPlanResponse> | undefined, b: CommitDefaultBillingPlanResponse | PlainMessage<CommitDefaultBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateBillingPlanRequest
 */
export declare class CreateBillingPlanRequest extends Message<CreateBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<CreateBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBillingPlanRequest;

  static equals(a: CreateBillingPlanRequest | PlainMessage<CreateBillingPlanRequest> | undefined, b: CreateBillingPlanRequest | PlainMessage<CreateBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateBillingPlanResponse
 */
export declare class CreateBillingPlanResponse extends Message<CreateBillingPlanResponse> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<CreateBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBillingPlanResponse;

  static equals(a: CreateBillingPlanResponse | PlainMessage<CreateBillingPlanResponse> | undefined, b: CreateBillingPlanResponse | PlainMessage<CreateBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateDefaultBillingPlanRequest
 */
export declare class CreateDefaultBillingPlanRequest extends Message<CreateDefaultBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<CreateDefaultBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateDefaultBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultBillingPlanRequest;

  static equals(a: CreateDefaultBillingPlanRequest | PlainMessage<CreateDefaultBillingPlanRequest> | undefined, b: CreateDefaultBillingPlanRequest | PlainMessage<CreateDefaultBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateDefaultBillingPlanResponse
 */
export declare class CreateDefaultBillingPlanResponse extends Message<CreateDefaultBillingPlanResponse> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<CreateDefaultBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateDefaultBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDefaultBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDefaultBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDefaultBillingPlanResponse;

  static equals(a: CreateDefaultBillingPlanResponse | PlainMessage<CreateDefaultBillingPlanResponse> | undefined, b: CreateDefaultBillingPlanResponse | PlainMessage<CreateDefaultBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteBillingPlanRequest
 */
export declare class DeleteBillingPlanRequest extends Message<DeleteBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<DeleteBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBillingPlanRequest;

  static equals(a: DeleteBillingPlanRequest | PlainMessage<DeleteBillingPlanRequest> | undefined, b: DeleteBillingPlanRequest | PlainMessage<DeleteBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteBillingPlanResponse
 */
export declare class DeleteBillingPlanResponse extends Message<DeleteBillingPlanResponse> {
  constructor(data?: PartialMessage<DeleteBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBillingPlanResponse;

  static equals(a: DeleteBillingPlanResponse | PlainMessage<DeleteBillingPlanResponse> | undefined, b: DeleteBillingPlanResponse | PlainMessage<DeleteBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteDefaultBillingPlanRequest
 */
export declare class DeleteDefaultBillingPlanRequest extends Message<DeleteDefaultBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<DeleteDefaultBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteDefaultBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultBillingPlanRequest;

  static equals(a: DeleteDefaultBillingPlanRequest | PlainMessage<DeleteDefaultBillingPlanRequest> | undefined, b: DeleteDefaultBillingPlanRequest | PlainMessage<DeleteDefaultBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteDefaultBillingPlanResponse
 */
export declare class DeleteDefaultBillingPlanResponse extends Message<DeleteDefaultBillingPlanResponse> {
  constructor(data?: PartialMessage<DeleteDefaultBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteDefaultBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteDefaultBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteDefaultBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteDefaultBillingPlanResponse;

  static equals(a: DeleteDefaultBillingPlanResponse | PlainMessage<DeleteDefaultBillingPlanResponse> | undefined, b: DeleteDefaultBillingPlanResponse | PlainMessage<DeleteDefaultBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DuplicateBillingPlanRequest
 */
export declare class DuplicateBillingPlanRequest extends Message<DuplicateBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<DuplicateBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DuplicateBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateBillingPlanRequest;

  static equals(a: DuplicateBillingPlanRequest | PlainMessage<DuplicateBillingPlanRequest> | undefined, b: DuplicateBillingPlanRequest | PlainMessage<DuplicateBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DuplicateBillingPlanResponse
 */
export declare class DuplicateBillingPlanResponse extends Message<DuplicateBillingPlanResponse> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<DuplicateBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DuplicateBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateBillingPlanResponse;

  static equals(a: DuplicateBillingPlanResponse | PlainMessage<DuplicateBillingPlanResponse> | undefined, b: DuplicateBillingPlanResponse | PlainMessage<DuplicateBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DuplicateDefaultBillingPlanRequest
 */
export declare class DuplicateDefaultBillingPlanRequest extends Message<DuplicateDefaultBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<DuplicateDefaultBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DuplicateDefaultBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateDefaultBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateDefaultBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateDefaultBillingPlanRequest;

  static equals(a: DuplicateDefaultBillingPlanRequest | PlainMessage<DuplicateDefaultBillingPlanRequest> | undefined, b: DuplicateDefaultBillingPlanRequest | PlainMessage<DuplicateDefaultBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DuplicateDefaultBillingPlanResponse
 */
export declare class DuplicateDefaultBillingPlanResponse extends Message<DuplicateDefaultBillingPlanResponse> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<DuplicateDefaultBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DuplicateDefaultBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateDefaultBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateDefaultBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateDefaultBillingPlanResponse;

  static equals(a: DuplicateDefaultBillingPlanResponse | PlainMessage<DuplicateDefaultBillingPlanResponse> | undefined, b: DuplicateDefaultBillingPlanResponse | PlainMessage<DuplicateDefaultBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetActiveBillingPlanRequest
 */
export declare class GetActiveBillingPlanRequest extends Message<GetActiveBillingPlanRequest> {
  /**
   * Optional: if not set, will get the default billing plan
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Optional: if not set, will use current time
   *
   * @generated from field: google.protobuf.Timestamp effective_time = 2;
   */
  effectiveTime?: Timestamp;

  constructor(data?: PartialMessage<GetActiveBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetActiveBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveBillingPlanRequest;

  static equals(a: GetActiveBillingPlanRequest | PlainMessage<GetActiveBillingPlanRequest> | undefined, b: GetActiveBillingPlanRequest | PlainMessage<GetActiveBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetActiveBillingPlanResponse
 */
export declare class GetActiveBillingPlanResponse extends Message<GetActiveBillingPlanResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 1;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<GetActiveBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetActiveBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveBillingPlanResponse;

  static equals(a: GetActiveBillingPlanResponse | PlainMessage<GetActiveBillingPlanResponse> | undefined, b: GetActiveBillingPlanResponse | PlainMessage<GetActiveBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetBillingPlanRequest
 */
export declare class GetBillingPlanRequest extends Message<GetBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  constructor(data?: PartialMessage<GetBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBillingPlanRequest;

  static equals(a: GetBillingPlanRequest | PlainMessage<GetBillingPlanRequest> | undefined, b: GetBillingPlanRequest | PlainMessage<GetBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetBillingPlanResponse
 */
export declare class GetBillingPlanResponse extends Message<GetBillingPlanResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 1;
   */
  billingPlan?: BillingPlan;

  constructor(data?: PartialMessage<GetBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBillingPlanResponse;

  static equals(a: GetBillingPlanResponse | PlainMessage<GetBillingPlanResponse> | undefined, b: GetBillingPlanResponse | PlainMessage<GetBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListBillingPlansRequest
 */
export declare class ListBillingPlansRequest extends Message<ListBillingPlansRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * Optional: defaults to no filter.
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * Optional: defaults to all fields.
   *
   * @generated from field: google.protobuf.FieldMask fields = 3;
   */
  fields?: FieldMask;

  /**
   * Optional: defaults to no sort.
   *
   * @generated from field: repeated services.billing.v1alpha1.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha1.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListBillingPlansRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListBillingPlansRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingPlansRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingPlansRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingPlansRequest;

  static equals(a: ListBillingPlansRequest | PlainMessage<ListBillingPlansRequest> | undefined, b: ListBillingPlansRequest | PlainMessage<ListBillingPlansRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListBillingPlansResponse
 */
export declare class ListBillingPlansResponse extends Message<ListBillingPlansResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha1.BillingPlan billing_plans = 1;
   */
  billingPlans: BillingPlan[];

  /**
   * Optional: only present if paginating.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<ListBillingPlansResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListBillingPlansResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBillingPlansResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBillingPlansResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBillingPlansResponse;

  static equals(a: ListBillingPlansResponse | PlainMessage<ListBillingPlansResponse> | undefined, b: ListBillingPlansResponse | PlainMessage<ListBillingPlansResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateBillingPlanRequest
 */
export declare class UpdateBillingPlanRequest extends Message<UpdateBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBillingPlanRequest;

  static equals(a: UpdateBillingPlanRequest | PlainMessage<UpdateBillingPlanRequest> | undefined, b: UpdateBillingPlanRequest | PlainMessage<UpdateBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateBillingPlanResponse
 */
export declare class UpdateBillingPlanResponse extends Message<UpdateBillingPlanResponse> {
  constructor(data?: PartialMessage<UpdateBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateBillingPlanResponse;

  static equals(a: UpdateBillingPlanResponse | PlainMessage<UpdateBillingPlanResponse> | undefined, b: UpdateBillingPlanResponse | PlainMessage<UpdateBillingPlanResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateDefaultBillingPlanRequest
 */
export declare class UpdateDefaultBillingPlanRequest extends Message<UpdateDefaultBillingPlanRequest> {
  /**
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.BillingPlan billing_plan = 2;
   */
  billingPlan?: BillingPlan;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateDefaultBillingPlanRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateDefaultBillingPlanRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultBillingPlanRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultBillingPlanRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultBillingPlanRequest;

  static equals(a: UpdateDefaultBillingPlanRequest | PlainMessage<UpdateDefaultBillingPlanRequest> | undefined, b: UpdateDefaultBillingPlanRequest | PlainMessage<UpdateDefaultBillingPlanRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateDefaultBillingPlanResponse
 */
export declare class UpdateDefaultBillingPlanResponse extends Message<UpdateDefaultBillingPlanResponse> {
  constructor(data?: PartialMessage<UpdateDefaultBillingPlanResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateDefaultBillingPlanResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDefaultBillingPlanResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDefaultBillingPlanResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDefaultBillingPlanResponse;

  static equals(a: UpdateDefaultBillingPlanResponse | PlainMessage<UpdateDefaultBillingPlanResponse> | undefined, b: UpdateDefaultBillingPlanResponse | PlainMessage<UpdateDefaultBillingPlanResponse> | undefined): boolean;
}

