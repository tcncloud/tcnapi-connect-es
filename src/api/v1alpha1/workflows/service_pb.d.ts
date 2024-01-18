// Copyright (c) 2020, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/workflows/service.proto (package api.v1alpha1.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * PersistedWorkflowDefinition is the flow definition object
 *
 * @generated from message api.v1alpha1.workflows.PersistedWorkflowDefinition
 */
export declare class PersistedWorkflowDefinition extends Message<PersistedWorkflowDefinition> {
  /**
   * flow_definition_id is the unique identifier for the flow definition. This is generated by the system, therefor its value is meaningless on create
   *
   * @generated from field: string flow_definition_id = 1;
   */
  flowDefinitionId: string;

  /**
   * org_id that owns this definition. Must match the org_id of the authenticated user
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * application that owns this definition
   *
   * @generated from field: string application = 3;
   */
  application: string;

  /**
   * this definition name
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * labels can be used to group/tag flow definitions together into logical categories
   *
   * @generated from field: repeated string labels = 9;
   */
  labels: string[];

  /**
   * this definition description
   *
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * the JSON serialized form of the flow definition
   *
   * JSON serialized form of the proto definition
   *
   * @generated from field: string definition = 6;
   */
  definition: string;

  /**
   * create_time is the time the flow definition was created. Not used for the update request
   *
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  /**
   * update_time is the time the flow definition was last updated. Not used for the create request
   *
   * @generated from field: google.protobuf.Timestamp update_time = 8;
   */
  updateTime?: Timestamp;

  /**
   * delete_time is the time the flow definition was soft-deleted. Not used for the create request
   *
   * @generated from field: google.protobuf.Timestamp delete_time = 10;
   */
  deleteTime?: Timestamp;

  /**
   * extra is a JSON serialized string that can be used to store extra data for the flow definition (e.g. UI positioning data)
   *
   * JSON serialized data for UI (e.g. nodes positioning)
   *
   * @generated from field: string extra = 100;
   */
  extra: string;

  constructor(data?: PartialMessage<PersistedWorkflowDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.PersistedWorkflowDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PersistedWorkflowDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PersistedWorkflowDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PersistedWorkflowDefinition;

  static equals(a: PersistedWorkflowDefinition | PlainMessage<PersistedWorkflowDefinition> | undefined, b: PersistedWorkflowDefinition | PlainMessage<PersistedWorkflowDefinition> | undefined): boolean;
}

/**
 * CreateWorkflowDefinitionRequest is the request object for creating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.CreateWorkflowDefinitionRequest
 */
export declare class CreateWorkflowDefinitionRequest extends Message<CreateWorkflowDefinitionRequest> {
  /**
   * workflow definition is the flow definition object
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<CreateWorkflowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.CreateWorkflowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWorkflowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWorkflowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWorkflowDefinitionRequest;

  static equals(a: CreateWorkflowDefinitionRequest | PlainMessage<CreateWorkflowDefinitionRequest> | undefined, b: CreateWorkflowDefinitionRequest | PlainMessage<CreateWorkflowDefinitionRequest> | undefined): boolean;
}

/**
 * CreateWorkflowDefinitionResponse is the response object for creating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.CreateWorkflowDefinitionResponse
 */
export declare class CreateWorkflowDefinitionResponse extends Message<CreateWorkflowDefinitionResponse> {
  /**
   * workflow_definition is the persisted flow definition object (with the flow_definition_id set)
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<CreateWorkflowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.CreateWorkflowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWorkflowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWorkflowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWorkflowDefinitionResponse;

  static equals(a: CreateWorkflowDefinitionResponse | PlainMessage<CreateWorkflowDefinitionResponse> | undefined, b: CreateWorkflowDefinitionResponse | PlainMessage<CreateWorkflowDefinitionResponse> | undefined): boolean;
}

/**
 * GetWorkflowDefinitionRequest is the request object for retrieving a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetWorkflowDefinitionRequest
 */
export declare class GetWorkflowDefinitionRequest extends Message<GetWorkflowDefinitionRequest> {
  /**
   * flow_definition_id is the identifier for the flow definition to retrieve
   *
   * @generated from field: string workflow_definition_id = 1;
   */
  workflowDefinitionId: string;

  constructor(data?: PartialMessage<GetWorkflowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetWorkflowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWorkflowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWorkflowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWorkflowDefinitionRequest;

  static equals(a: GetWorkflowDefinitionRequest | PlainMessage<GetWorkflowDefinitionRequest> | undefined, b: GetWorkflowDefinitionRequest | PlainMessage<GetWorkflowDefinitionRequest> | undefined): boolean;
}

/**
 * GetWorkflowDefinitionResponse is the response object for retrieving a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetWorkflowDefinitionResponse
 */
export declare class GetWorkflowDefinitionResponse extends Message<GetWorkflowDefinitionResponse> {
  /**
   * workflow_1definition is the flow definition object
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<GetWorkflowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetWorkflowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWorkflowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWorkflowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWorkflowDefinitionResponse;

  static equals(a: GetWorkflowDefinitionResponse | PlainMessage<GetWorkflowDefinitionResponse> | undefined, b: GetWorkflowDefinitionResponse | PlainMessage<GetWorkflowDefinitionResponse> | undefined): boolean;
}

/**
 * ListWorkflowDefinitionsRequest is the request object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListWorkflowDefinitionsRequest
 */
export declare class ListWorkflowDefinitionsRequest extends Message<ListWorkflowDefinitionsRequest> {
  /**
   * org_id is the organization identifier to list flow definitions for
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * application is the application identifier to list flow definitions for. If this is specified, the output is filtered to only include flow definitions for the application
   *
   * @generated from field: string application = 2;
   */
  application: string;

  /**
   * labels can be used to filter grouped/tagged flow definitions
   *
   * @generated from field: repeated string labels = 3;
   */
  labels: string[];

  constructor(data?: PartialMessage<ListWorkflowDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ListWorkflowDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListWorkflowDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListWorkflowDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListWorkflowDefinitionsRequest;

  static equals(a: ListWorkflowDefinitionsRequest | PlainMessage<ListWorkflowDefinitionsRequest> | undefined, b: ListWorkflowDefinitionsRequest | PlainMessage<ListWorkflowDefinitionsRequest> | undefined): boolean;
}

/**
 * ListWorkflowDefinitionsResponse is the response object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListWorkflowDefinitionsResponse
 */
export declare class ListWorkflowDefinitionsResponse extends Message<ListWorkflowDefinitionsResponse> {
  /**
   * workflow_definition is the flow definition object
   *
   * an array of
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<ListWorkflowDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ListWorkflowDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListWorkflowDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListWorkflowDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListWorkflowDefinitionsResponse;

  static equals(a: ListWorkflowDefinitionsResponse | PlainMessage<ListWorkflowDefinitionsResponse> | undefined, b: ListWorkflowDefinitionsResponse | PlainMessage<ListWorkflowDefinitionsResponse> | undefined): boolean;
}

/**
 * UpdateWorkflowDefinitionRequest is the request object for updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.UpdateWorkflowDefinitionRequest
 */
export declare class UpdateWorkflowDefinitionRequest extends Message<UpdateWorkflowDefinitionRequest> {
  /**
   * flow_definition is the object to be updated. Only the name, description, definition graph and the extra information are updated
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<UpdateWorkflowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.UpdateWorkflowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateWorkflowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateWorkflowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateWorkflowDefinitionRequest;

  static equals(a: UpdateWorkflowDefinitionRequest | PlainMessage<UpdateWorkflowDefinitionRequest> | undefined, b: UpdateWorkflowDefinitionRequest | PlainMessage<UpdateWorkflowDefinitionRequest> | undefined): boolean;
}

/**
 * UpdateWorkflowDefinitionResponse is the response object for updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.UpdateWorkflowDefinitionResponse
 */
export declare class UpdateWorkflowDefinitionResponse extends Message<UpdateWorkflowDefinitionResponse> {
  /**
   * flow_definition is the updated flow definition object
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<UpdateWorkflowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.UpdateWorkflowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateWorkflowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateWorkflowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateWorkflowDefinitionResponse;

  static equals(a: UpdateWorkflowDefinitionResponse | PlainMessage<UpdateWorkflowDefinitionResponse> | undefined, b: UpdateWorkflowDefinitionResponse | PlainMessage<UpdateWorkflowDefinitionResponse> | undefined): boolean;
}

/**
 * DeleteWorkflowDefinitionRequest is the request object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteWorkflowDefinitionRequest
 */
export declare class DeleteWorkflowDefinitionRequest extends Message<DeleteWorkflowDefinitionRequest> {
  /**
   * workflow_definition_id is the identifier for the flow definition to delete
   *
   * @generated from field: string workflow_definition_id = 1;
   */
  workflowDefinitionId: string;

  constructor(data?: PartialMessage<DeleteWorkflowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.DeleteWorkflowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteWorkflowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteWorkflowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteWorkflowDefinitionRequest;

  static equals(a: DeleteWorkflowDefinitionRequest | PlainMessage<DeleteWorkflowDefinitionRequest> | undefined, b: DeleteWorkflowDefinitionRequest | PlainMessage<DeleteWorkflowDefinitionRequest> | undefined): boolean;
}

/**
 * DeleteWorkflowDefinitionResponse is the response object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteWorkflowDefinitionResponse
 */
export declare class DeleteWorkflowDefinitionResponse extends Message<DeleteWorkflowDefinitionResponse> {
  /**
   * workflow_definition is the deleted flow definition object
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<DeleteWorkflowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.DeleteWorkflowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteWorkflowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteWorkflowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteWorkflowDefinitionResponse;

  static equals(a: DeleteWorkflowDefinitionResponse | PlainMessage<DeleteWorkflowDefinitionResponse> | undefined, b: DeleteWorkflowDefinitionResponse | PlainMessage<DeleteWorkflowDefinitionResponse> | undefined): boolean;
}

/**
 * ValidateWorkflowDefinitionRequest is the request object for validating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.ValidateWorkflowDefinitionRequest
 */
export declare class ValidateWorkflowDefinitionRequest extends Message<ValidateWorkflowDefinitionRequest> {
  /**
   * workflow_definition is the object to be validated
   *
   * @generated from field: api.v1alpha1.workflows.PersistedWorkflowDefinition workflow_definition = 1;
   */
  workflowDefinition?: PersistedWorkflowDefinition;

  constructor(data?: PartialMessage<ValidateWorkflowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ValidateWorkflowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidateWorkflowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidateWorkflowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidateWorkflowDefinitionRequest;

  static equals(a: ValidateWorkflowDefinitionRequest | PlainMessage<ValidateWorkflowDefinitionRequest> | undefined, b: ValidateWorkflowDefinitionRequest | PlainMessage<ValidateWorkflowDefinitionRequest> | undefined): boolean;
}

/**
 * ValidateWorkflowDefinitionResponse is the response object for validating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.ValidateWorkflowDefinitionResponse
 */
export declare class ValidateWorkflowDefinitionResponse extends Message<ValidateWorkflowDefinitionResponse> {
  /**
   * valid is true if the flow definition is valid, false otherwise
   *
   * @generated from field: bool valid = 1;
   */
  valid: boolean;

  /**
   * error is the error message if the flow definition is invalid
   *
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<ValidateWorkflowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ValidateWorkflowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidateWorkflowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidateWorkflowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidateWorkflowDefinitionResponse;

  static equals(a: ValidateWorkflowDefinitionResponse | PlainMessage<ValidateWorkflowDefinitionResponse> | undefined, b: ValidateWorkflowDefinitionResponse | PlainMessage<ValidateWorkflowDefinitionResponse> | undefined): boolean;
}

