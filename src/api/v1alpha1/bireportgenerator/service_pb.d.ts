// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/bireportgenerator/service.proto (package api.v1alpha1.bireportgenerator, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ReportJob } from "./entities_pb.js";

/**
 * CreateReportJobRequest is the request for creating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.CreateReportJobRequest
 */
export declare class CreateReportJobRequest extends Message<CreateReportJobRequest> {
  /**
   * The report job to create.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  constructor(data?: PartialMessage<CreateReportJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.CreateReportJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateReportJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateReportJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateReportJobRequest;

  static equals(a: CreateReportJobRequest | PlainMessage<CreateReportJobRequest> | undefined, b: CreateReportJobRequest | PlainMessage<CreateReportJobRequest> | undefined): boolean;
}

/**
 * CreateReportJobResponse is the response for creating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.CreateReportJobResponse
 */
export declare class CreateReportJobResponse extends Message<CreateReportJobResponse> {
  /**
   * The created report job.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  constructor(data?: PartialMessage<CreateReportJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.CreateReportJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateReportJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateReportJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateReportJobResponse;

  static equals(a: CreateReportJobResponse | PlainMessage<CreateReportJobResponse> | undefined, b: CreateReportJobResponse | PlainMessage<CreateReportJobResponse> | undefined): boolean;
}

/**
 * ListReportJobsRequest is the request for listing report jobs.
 *
 * @generated from message api.v1alpha1.bireportgenerator.ListReportJobsRequest
 */
export declare class ListReportJobsRequest extends Message<ListReportJobsRequest> {
  constructor(data?: PartialMessage<ListReportJobsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.ListReportJobsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListReportJobsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListReportJobsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListReportJobsRequest;

  static equals(a: ListReportJobsRequest | PlainMessage<ListReportJobsRequest> | undefined, b: ListReportJobsRequest | PlainMessage<ListReportJobsRequest> | undefined): boolean;
}

/**
 * ListReportJobsResponse is the response for listing report jobs.
 *
 * @generated from message api.v1alpha1.bireportgenerator.ListReportJobsResponse
 */
export declare class ListReportJobsResponse extends Message<ListReportJobsResponse> {
  /**
   * The report jobs.
   *
   * @generated from field: repeated api.v1alpha1.bireportgenerator.ReportJob report_jobs = 1;
   */
  reportJobs: ReportJob[];

  constructor(data?: PartialMessage<ListReportJobsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.ListReportJobsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListReportJobsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListReportJobsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListReportJobsResponse;

  static equals(a: ListReportJobsResponse | PlainMessage<ListReportJobsResponse> | undefined, b: ListReportJobsResponse | PlainMessage<ListReportJobsResponse> | undefined): boolean;
}

/**
 * UpdateReportJobRequest is the request for updating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.UpdateReportJobRequest
 */
export declare class UpdateReportJobRequest extends Message<UpdateReportJobRequest> {
  /**
   * The report job to update.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  /**
   * The fields to update.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateReportJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.UpdateReportJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateReportJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateReportJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateReportJobRequest;

  static equals(a: UpdateReportJobRequest | PlainMessage<UpdateReportJobRequest> | undefined, b: UpdateReportJobRequest | PlainMessage<UpdateReportJobRequest> | undefined): boolean;
}

/**
 * UpdateReportJobResponse is the response for updating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.UpdateReportJobResponse
 */
export declare class UpdateReportJobResponse extends Message<UpdateReportJobResponse> {
  /**
   * The updated report job.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  constructor(data?: PartialMessage<UpdateReportJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.UpdateReportJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateReportJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateReportJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateReportJobResponse;

  static equals(a: UpdateReportJobResponse | PlainMessage<UpdateReportJobResponse> | undefined, b: UpdateReportJobResponse | PlainMessage<UpdateReportJobResponse> | undefined): boolean;
}

/**
 * DeleteReportJobRequest is the request for deleting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.DeleteReportJobRequest
 */
export declare class DeleteReportJobRequest extends Message<DeleteReportJobRequest> {
  /**
   * id of the report job to delete.
   *
   * @generated from field: string report_job_id = 1;
   */
  reportJobId: string;

  constructor(data?: PartialMessage<DeleteReportJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.DeleteReportJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteReportJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteReportJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteReportJobRequest;

  static equals(a: DeleteReportJobRequest | PlainMessage<DeleteReportJobRequest> | undefined, b: DeleteReportJobRequest | PlainMessage<DeleteReportJobRequest> | undefined): boolean;
}

/**
 * DeleteReportJobResponse is the response for deleting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.DeleteReportJobResponse
 */
export declare class DeleteReportJobResponse extends Message<DeleteReportJobResponse> {
  constructor(data?: PartialMessage<DeleteReportJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.DeleteReportJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteReportJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteReportJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteReportJobResponse;

  static equals(a: DeleteReportJobResponse | PlainMessage<DeleteReportJobResponse> | undefined, b: DeleteReportJobResponse | PlainMessage<DeleteReportJobResponse> | undefined): boolean;
}

/**
 * GetReportJobRequest is the request for getting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GetReportJobRequest
 */
export declare class GetReportJobRequest extends Message<GetReportJobRequest> {
  /**
   * id of the report job to get.
   *
   * @generated from field: string report_job_id = 1;
   */
  reportJobId: string;

  constructor(data?: PartialMessage<GetReportJobRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.GetReportJobRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReportJobRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReportJobRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReportJobRequest;

  static equals(a: GetReportJobRequest | PlainMessage<GetReportJobRequest> | undefined, b: GetReportJobRequest | PlainMessage<GetReportJobRequest> | undefined): boolean;
}

/**
 * GetReportJobResponse is the response for getting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GetReportJobResponse
 */
export declare class GetReportJobResponse extends Message<GetReportJobResponse> {
  /**
   * The report job.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  constructor(data?: PartialMessage<GetReportJobResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.GetReportJobResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetReportJobResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetReportJobResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetReportJobResponse;

  static equals(a: GetReportJobResponse | PlainMessage<GetReportJobResponse> | undefined, b: GetReportJobResponse | PlainMessage<GetReportJobResponse> | undefined): boolean;
}

/**
 * GenerateReportRequest is the request for generating a report.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GenerateReportRequest
 */
export declare class GenerateReportRequest extends Message<GenerateReportRequest> {
  /**
   * The report job to generate the report for.
   *
   * @generated from field: api.v1alpha1.bireportgenerator.ReportJob report_job = 1;
   */
  reportJob?: ReportJob;

  constructor(data?: PartialMessage<GenerateReportRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.GenerateReportRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateReportRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateReportRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateReportRequest;

  static equals(a: GenerateReportRequest | PlainMessage<GenerateReportRequest> | undefined, b: GenerateReportRequest | PlainMessage<GenerateReportRequest> | undefined): boolean;
}

/**
 * GenerateReportResponse is the response for generating a report.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GenerateReportResponse
 */
export declare class GenerateReportResponse extends Message<GenerateReportResponse> {
  constructor(data?: PartialMessage<GenerateReportResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.bireportgenerator.GenerateReportResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateReportResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateReportResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateReportResponse;

  static equals(a: GenerateReportResponse | PlainMessage<GenerateReportResponse> | undefined, b: GenerateReportResponse | PlainMessage<GenerateReportResponse> | undefined): boolean;
}

