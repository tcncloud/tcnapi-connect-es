// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/plan.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BillingPlan represents a collection of rate definitions
 *
 * @generated from message services.billing.entities.v1alpha1.BillingPlan
 */
export declare class BillingPlan extends Message<BillingPlan> {
  /**
   * the billing plan identifier
   *
   * @generated from field: string billing_plan_id = 1;
   */
  billingPlanId: string;

  /**
   * time the billing plan was created
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * time the billing plan was last updated
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * the time from which this billing plan will take effect
   *
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * the time this billing plan ended; can be null
   *
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * the time this billing plan was deleted; can be null
   *
   * @generated from field: google.protobuf.Timestamp delete_time = 6;
   */
  deleteTime?: Timestamp;

  /**
   * the billing plan rate definitions
   *
   * @generated from field: repeated string rate_definition_ids = 7;
   */
  rateDefinitionIds: string[];

  constructor(data?: PartialMessage<BillingPlan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.BillingPlan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BillingPlan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BillingPlan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BillingPlan;

  static equals(a: BillingPlan | PlainMessage<BillingPlan> | undefined, b: BillingPlan | PlainMessage<BillingPlan> | undefined): boolean;
}

