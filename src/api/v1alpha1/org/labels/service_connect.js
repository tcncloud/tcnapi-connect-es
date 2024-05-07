// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/labels/service.proto (package api.v1alpha1.org.labels, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AttachLabelRequest, AttachLabelResponse, CreateLabelRequest, CreateLabelResponse, DeleteLabelRequest, DeleteLabelResponse, DetachLabelRequest, DetachLabelResponse, GetLabeledEntityMapRequest, GetLabeledEntityMapResponse, GetLabelRequest, GetLabelResponse, ListLabelsRequest, ListLabelsResponse, UpdateLabelRequest, UpdateLabelResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.labels.LabelsService
 */
export const LabelsService = {
  typeName: "api.v1alpha1.org.labels.LabelsService",
  methods: {
    /**
     * CreateLabel creates a new label.
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.CreateLabel
     */
    createLabel: {
      name: "CreateLabel",
      I: CreateLabelRequest,
      O: CreateLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetLabel gets a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.GetLabel
     */
    getLabel: {
      name: "GetLabel",
      I: GetLabelRequest,
      O: GetLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateLabel updates a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.UpdateLabel
     */
    updateLabel: {
      name: "UpdateLabel",
      I: UpdateLabelRequest,
      O: UpdateLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListLabels lists all labels for a given organization
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.ListLabels
     */
    listLabels: {
      name: "ListLabels",
      I: ListLabelsRequest,
      O: ListLabelsResponse,
      kind: MethodKind.Unary,
    },
    /**
     *   DeleteLabel deletes a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.DeleteLabel
     */
    deleteLabel: {
      name: "DeleteLabel",
      I: DeleteLabelRequest,
      O: DeleteLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AttachLabel attaches a label to a given entity type
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.AttachLabel
     */
    attachLabel: {
      name: "AttachLabel",
      I: AttachLabelRequest,
      O: AttachLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DetachLabel detaches a label from an entity based on an entity type
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.DetachLabel
     */
    detachLabel: {
      name: "DetachLabel",
      I: DetachLabelRequest,
      O: DetachLabelResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetLabeledEntityMap gives back a map of entity Id to attached labels. The Entity type is specified on the request
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.GetLabeledEntityMap
     */
    getLabeledEntityMap: {
      name: "GetLabeledEntityMap",
      I: GetLabeledEntityMapRequest,
      O: GetLabeledEntityMapResponse,
      kind: MethodKind.Unary,
    },
  }
};

