// Copyright (c) 2019, TCN Inc.
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

// @generated by protoc-gen-connect-es v0.9.1
// @generated from file api/v0alpha/learn.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ContentEditorDataReq, ContentEditorDataRes, ContentReq, ContentRes, DeleteStandaloneReq, DeleteStandaloneRes, ExistReq, ExistRes, ExportManyReq, ExportRes, SearchContentReq, SearchRes, StandaloneReq, StandaloneRes, StoreStaticImageReq, StoreStaticImageRes, UpdateReq, UpdateRes, UploadDynamicScreenshotReq, UploadDynamicScreenshotRes } from "./learn_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A service for creating and reading learning material
 *
 * @generated from service api.v0alpha.Learn
 */
export const Learn = {
  typeName: "api.v0alpha.Learn",
  methods: {
    /**
     * @generated from rpc api.v0alpha.Learn.Exist
     */
    exist: {
      name: "Exist",
      I: ExistReq,
      O: ExistRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Learn.Content
     */
    content: {
      name: "Content",
      I: ContentReq,
      O: ContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Learn.ContentEditorData
     */
    contentEditorData: {
      name: "ContentEditorData",
      I: ContentEditorDataReq,
      O: ContentEditorDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Learn.Update
     */
    update: {
      name: "Update",
      I: UpdateReq,
      O: UpdateRes,
      kind: MethodKind.Unary,
    },
    /**
     * exports multiple pages of the learning center markdown as PDF
     *
     * @generated from rpc api.v0alpha.Learn.ExportMany
     */
    exportMany: {
      name: "ExportMany",
      I: ExportManyReq,
      O: ExportRes,
      kind: MethodKind.Unary,
    },
    /**
     * upload url for static images
     *
     * @generated from rpc api.v0alpha.Learn.StoreStaticImage
     */
    storeStaticImage: {
      name: "StoreStaticImage",
      I: StoreStaticImageReq,
      O: StoreStaticImageRes,
      kind: MethodKind.Unary,
    },
    /**
     * search content in learning pages
     *
     * @generated from rpc api.v0alpha.Learn.SearchContent
     */
    searchContent: {
      name: "SearchContent",
      I: SearchContentReq,
      O: SearchRes,
      kind: MethodKind.Unary,
    },
    /**
     * upload dynamic learning image screenshot
     *
     * @generated from rpc api.v0alpha.Learn.UploadDynamicScreenshot
     */
    uploadDynamicScreenshot: {
      name: "UploadDynamicScreenshot",
      I: UploadDynamicScreenshotReq,
      O: UploadDynamicScreenshotRes,
      kind: MethodKind.Unary,
    },
    /**
     * get standalone articles from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.Standalone
     */
    standalone: {
      name: "Standalone",
      I: StandaloneReq,
      O: StandaloneRes,
      kind: MethodKind.Unary,
    },
    /**
     * delete standalone articles from learning pages
     *
     * @generated from rpc api.v0alpha.Learn.DeleteStandalone
     */
    deleteStandalone: {
      name: "DeleteStandalone",
      I: DeleteStandaloneReq,
      O: DeleteStandaloneRes,
      kind: MethodKind.Unary,
    },
  }
};

