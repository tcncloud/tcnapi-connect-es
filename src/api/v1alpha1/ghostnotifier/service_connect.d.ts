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

// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v1alpha1/ghostnotifier/service.proto (package api.v1alpha1.ghostnotifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListNotificationsReq } from "./service_pb.js";
import { GhostNotification } from "../../commons/ghostnotifier_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.ghostnotifier.GhostNotifierApi
 */
export declare const GhostNotifierApi: {
  readonly typeName: "api.v1alpha1.ghostnotifier.GhostNotifierApi",
  readonly methods: {
    /**
     * Opens a server side stream that will forward and ghost notifications to the client for the given user
     *
     * @generated from rpc api.v1alpha1.ghostnotifier.GhostNotifierApi.ListNotifications
     */
    readonly listNotifications: {
      readonly name: "ListNotifications",
      readonly I: typeof ListNotificationsReq,
      readonly O: typeof GhostNotification,
      readonly kind: MethodKind.ServerStreaming,
    },
  }
};

