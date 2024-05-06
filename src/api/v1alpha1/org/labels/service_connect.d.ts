// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/org/labels/service.proto (package api.v1alpha1.org.labels, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AttachLabelRequest, AttachLabelResponse, CreateLabelRequest, CreateLabelResponse, DeleteLabelRequest, DeleteLabelResponse, GetLabeledEntityMapRequest, GetLabeledEntityMapResponse, GetLabelRequest, GetLabelResponse, ListLabelsRequest, ListLabelsResponse, UpdateLabelRequest, UpdateLabelResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.labels.LabelsService
 */
export declare const LabelsService: {
  readonly typeName: "api.v1alpha1.org.labels.LabelsService",
  readonly methods: {
    /**
     * CreateLabel creates a new label.
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.CreateLabel
     */
    readonly createLabel: {
      readonly name: "CreateLabel",
      readonly I: typeof CreateLabelRequest,
      readonly O: typeof CreateLabelResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetLabel gets a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.GetLabel
     */
    readonly getLabel: {
      readonly name: "GetLabel",
      readonly I: typeof GetLabelRequest,
      readonly O: typeof GetLabelResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateLabel updates a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.UpdateLabel
     */
    readonly updateLabel: {
      readonly name: "UpdateLabel",
      readonly I: typeof UpdateLabelRequest,
      readonly O: typeof UpdateLabelResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListLabels lists all labels for a given organization
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.ListLabels
     */
    readonly listLabels: {
      readonly name: "ListLabels",
      readonly I: typeof ListLabelsRequest,
      readonly O: typeof ListLabelsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *   DeleteLabel deletes a single label
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.DeleteLabel
     */
    readonly deleteLabel: {
      readonly name: "DeleteLabel",
      readonly I: typeof DeleteLabelRequest,
      readonly O: typeof DeleteLabelResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * AttachLabel attaches a label to a given entity type
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.AttachLabel
     */
    readonly attachLabel: {
      readonly name: "AttachLabel",
      readonly I: typeof AttachLabelRequest,
      readonly O: typeof AttachLabelResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetLabeledEntityMap gives back a map of entity Id to attached labels. The Entity type is specified on the request
     *
     * @generated from rpc api.v1alpha1.org.labels.LabelsService.GetLabeledEntityMap
     */
    readonly getLabeledEntityMap: {
      readonly name: "GetLabeledEntityMap",
      readonly I: typeof GetLabeledEntityMapRequest,
      readonly O: typeof GetLabeledEntityMapResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
