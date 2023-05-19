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

// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v1alpha1/org/legacy/service.proto (package api.v1alpha1.org.legacy, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RegisterOrganizationRequest, RegisterOrganizationResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.org.legacy.OrgLegacy
 */
export const OrgLegacy = {
  typeName: "api.v1alpha1.org.legacy.OrgLegacy",
  methods: {
    /**
     * Registers a new organization
     *
     * @generated from rpc api.v1alpha1.org.legacy.OrgLegacy.RegisterOrganization
     */
    registerOrganization: {
      name: "RegisterOrganization",
      I: RegisterOrganizationRequest,
      O: RegisterOrganizationResponse,
      kind: MethodKind.Unary,
    },
  }
};

