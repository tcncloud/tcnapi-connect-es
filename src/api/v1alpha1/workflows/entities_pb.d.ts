// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/workflows/entities.proto (package api.v1alpha1.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FlowDefinition, FlowState } from "../../commons/workflows/entities_pb.js";

/**
 * ListFlowDefinitionsRequest is the request object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListFlowDefinitionsRequest
 */
export declare class ListFlowDefinitionsRequest extends Message<ListFlowDefinitionsRequest> {
  /**
   * The filter to apply to the list of flow definitions
   *
   * @generated from field: string filter = 1;
   */
  filter: string;

  constructor(data?: PartialMessage<ListFlowDefinitionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ListFlowDefinitionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlowDefinitionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlowDefinitionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlowDefinitionsRequest;

  static equals(a: ListFlowDefinitionsRequest | PlainMessage<ListFlowDefinitionsRequest> | undefined, b: ListFlowDefinitionsRequest | PlainMessage<ListFlowDefinitionsRequest> | undefined): boolean;
}

/**
 * ListFlowDefinitionsResponse is the response object for listing flow definitions
 *
 * @generated from message api.v1alpha1.workflows.ListFlowDefinitionsResponse
 */
export declare class ListFlowDefinitionsResponse extends Message<ListFlowDefinitionsResponse> {
  /**
   * The list of flow definitions
   *
   * @generated from field: repeated api.commons.workflows.FlowDefinition flow_definitions = 1;
   */
  flowDefinitions: FlowDefinition[];

  constructor(data?: PartialMessage<ListFlowDefinitionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.ListFlowDefinitionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlowDefinitionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlowDefinitionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlowDefinitionsResponse;

  static equals(a: ListFlowDefinitionsResponse | PlainMessage<ListFlowDefinitionsResponse> | undefined, b: ListFlowDefinitionsResponse | PlainMessage<ListFlowDefinitionsResponse> | undefined): boolean;
}

/**
 * SaveFlowDefinitionRequest is the request object for creating/updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowDefinitionRequest
 */
export declare class SaveFlowDefinitionRequest extends Message<SaveFlowDefinitionRequest> {
  /**
   * The flow definition to save
   *
   * @generated from field: api.commons.workflows.FlowDefinition flow_definition = 1;
   */
  flowDefinition?: FlowDefinition;

  /**
   * The fields to update
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<SaveFlowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.SaveFlowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaveFlowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaveFlowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaveFlowDefinitionRequest;

  static equals(a: SaveFlowDefinitionRequest | PlainMessage<SaveFlowDefinitionRequest> | undefined, b: SaveFlowDefinitionRequest | PlainMessage<SaveFlowDefinitionRequest> | undefined): boolean;
}

/**
 * SaveFlowDefinitionResponse is the response object for creating/updating a flow definition
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowDefinitionResponse
 */
export declare class SaveFlowDefinitionResponse extends Message<SaveFlowDefinitionResponse> {
  /**
   * The ID of the flow definition that was saved
   *
   * @generated from field: string flow_definition_id = 1;
   */
  flowDefinitionId: string;

  /**
   * The flow definition that was saved
   *
   * @generated from field: api.commons.workflows.FlowDefinition flow_definition = 2;
   */
  flowDefinition?: FlowDefinition;

  constructor(data?: PartialMessage<SaveFlowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.SaveFlowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaveFlowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaveFlowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaveFlowDefinitionResponse;

  static equals(a: SaveFlowDefinitionResponse | PlainMessage<SaveFlowDefinitionResponse> | undefined, b: SaveFlowDefinitionResponse | PlainMessage<SaveFlowDefinitionResponse> | undefined): boolean;
}

/**
 * GetFlowDefinitionsRequest is the request object for getting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetFlowDefinitionRequest
 */
export declare class GetFlowDefinitionRequest extends Message<GetFlowDefinitionRequest> {
  /**
   * The ID of the flow definition to get
   *
   * @generated from field: string flow_definition_id = 1;
   */
  flowDefinitionId: string;

  constructor(data?: PartialMessage<GetFlowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetFlowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlowDefinitionRequest;

  static equals(a: GetFlowDefinitionRequest | PlainMessage<GetFlowDefinitionRequest> | undefined, b: GetFlowDefinitionRequest | PlainMessage<GetFlowDefinitionRequest> | undefined): boolean;
}

/**
 * GetFlowDefinitionsResponse is the response object for getting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.GetFlowDefinitionResponse
 */
export declare class GetFlowDefinitionResponse extends Message<GetFlowDefinitionResponse> {
  /**
   * The flow definition that was retrieved
   *
   * @generated from field: api.commons.workflows.FlowDefinition flow_definition = 1;
   */
  flowDefinition?: FlowDefinition;

  constructor(data?: PartialMessage<GetFlowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetFlowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlowDefinitionResponse;

  static equals(a: GetFlowDefinitionResponse | PlainMessage<GetFlowDefinitionResponse> | undefined, b: GetFlowDefinitionResponse | PlainMessage<GetFlowDefinitionResponse> | undefined): boolean;
}

/**
 * DeleteFlowDefinitionsRequest is the request object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteFlowDefinitionRequest
 */
export declare class DeleteFlowDefinitionRequest extends Message<DeleteFlowDefinitionRequest> {
  /**
   * The ID of the flow definition to delete
   *
   * @generated from field: string flow_definition_id = 1;
   */
  flowDefinitionId: string;

  constructor(data?: PartialMessage<DeleteFlowDefinitionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.DeleteFlowDefinitionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlowDefinitionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlowDefinitionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlowDefinitionRequest;

  static equals(a: DeleteFlowDefinitionRequest | PlainMessage<DeleteFlowDefinitionRequest> | undefined, b: DeleteFlowDefinitionRequest | PlainMessage<DeleteFlowDefinitionRequest> | undefined): boolean;
}

/**
 * DeleteFlowDefinitionsResponse is the response object for deleting a flow definition
 *
 * @generated from message api.v1alpha1.workflows.DeleteFlowDefinitionResponse
 */
export declare class DeleteFlowDefinitionResponse extends Message<DeleteFlowDefinitionResponse> {
  /**
   * true if the flow definition was deleted
   *
   * @generated from field: bool result = 1;
   */
  result: boolean;

  constructor(data?: PartialMessage<DeleteFlowDefinitionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.DeleteFlowDefinitionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlowDefinitionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlowDefinitionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlowDefinitionResponse;

  static equals(a: DeleteFlowDefinitionResponse | PlainMessage<DeleteFlowDefinitionResponse> | undefined, b: DeleteFlowDefinitionResponse | PlainMessage<DeleteFlowDefinitionResponse> | undefined): boolean;
}

/**
 * SaveFlowStateRequest is the request object for saving a flow state
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowStateRequest
 */
export declare class SaveFlowStateRequest extends Message<SaveFlowStateRequest> {
  /**
   * @generated from field: api.commons.workflows.FlowState flow_state = 1;
   */
  flowState?: FlowState;

  /**
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<SaveFlowStateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.SaveFlowStateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaveFlowStateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaveFlowStateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaveFlowStateRequest;

  static equals(a: SaveFlowStateRequest | PlainMessage<SaveFlowStateRequest> | undefined, b: SaveFlowStateRequest | PlainMessage<SaveFlowStateRequest> | undefined): boolean;
}

/**
 * SaveFlowStateResponse is the response object for saving a flow state
 *
 * @generated from message api.v1alpha1.workflows.SaveFlowStateResponse
 */
export declare class SaveFlowStateResponse extends Message<SaveFlowStateResponse> {
  /**
   * @generated from field: api.commons.workflows.FlowState flow_state = 1;
   */
  flowState?: FlowState;

  constructor(data?: PartialMessage<SaveFlowStateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.SaveFlowStateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SaveFlowStateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SaveFlowStateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SaveFlowStateResponse;

  static equals(a: SaveFlowStateResponse | PlainMessage<SaveFlowStateResponse> | undefined, b: SaveFlowStateResponse | PlainMessage<SaveFlowStateResponse> | undefined): boolean;
}

/**
 * GetFlowStateRequest is the request object for getting a flow state
 *
 * @generated from message api.v1alpha1.workflows.GetFlowStateRequest
 */
export declare class GetFlowStateRequest extends Message<GetFlowStateRequest> {
  /**
   * @generated from field: string flow_state_id = 1;
   */
  flowStateId: string;

  constructor(data?: PartialMessage<GetFlowStateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetFlowStateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlowStateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlowStateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlowStateRequest;

  static equals(a: GetFlowStateRequest | PlainMessage<GetFlowStateRequest> | undefined, b: GetFlowStateRequest | PlainMessage<GetFlowStateRequest> | undefined): boolean;
}

/**
 * GetFlowStateResponse is the response object for getting a flow state
 *
 * @generated from message api.v1alpha1.workflows.GetFlowStateResponse
 */
export declare class GetFlowStateResponse extends Message<GetFlowStateResponse> {
  /**
   * @generated from field: api.commons.workflows.FlowState flow_state = 1;
   */
  flowState?: FlowState;

  constructor(data?: PartialMessage<GetFlowStateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.workflows.GetFlowStateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFlowStateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFlowStateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFlowStateResponse;

  static equals(a: GetFlowStateResponse | PlainMessage<GetFlowStateResponse> | undefined, b: GetFlowStateResponse | PlainMessage<GetFlowStateResponse> | undefined): boolean;
}

