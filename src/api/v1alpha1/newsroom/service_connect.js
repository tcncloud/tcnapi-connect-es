// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/newsroom/service.proto (package api.v1alpha1.newsroom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateNewsArticleRequest, CreateNewsArticleResponse, CreatePublishedArticleRequest, CreatePublishedArticleResponse, GetNewsArticleByIdRequest, GetNewsArticleByIdResponse, GetNewsForUserRequest, GetNewsForUserResponse, GetPublishedArticleByIdRequest, GetPublishedArticleByIdResponse, ListNewsArticlesRequest, ListNewsArticlesResponse, ListPublishedArticlesRequest, ListPublishedArticlesResponse, StoreNewsroomImageRequest, StoreNewsroomImageResponse, UpdateNewsArticleRequest, UpdateNewsArticleResponse, UserActivityRequest, UserActivityResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for interacting with TCN's Newsroom API system.
 * Accessing all of the methods Requestuire an authenticated user with the correct
 * permissions.
 *
 * @generated from service api.v1alpha1.newsroom.NewsroomAPI
 */
export const NewsroomAPI = {
  typeName: "api.v1alpha1.newsroom.NewsroomAPI",
  methods: {
    /**
     * create news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreateNewsArticle
     */
    createNewsArticle: {
      name: "CreateNewsArticle",
      I: CreateNewsArticleRequest,
      O: CreateNewsArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * list news articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListNewsArticles
     */
    listNewsArticles: {
      name: "ListNewsArticles",
      I: ListNewsArticlesRequest,
      O: ListNewsArticlesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * get news article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetNewsArticleById
     */
    getNewsArticleById: {
      name: "GetNewsArticleById",
      I: GetNewsArticleByIdRequest,
      O: GetNewsArticleByIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * update news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UpdateNewsArticle
     */
    updateNewsArticle: {
      name: "UpdateNewsArticle",
      I: UpdateNewsArticleRequest,
      O: UpdateNewsArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * create published article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreatePublishedArticle
     */
    createPublishedArticle: {
      name: "CreatePublishedArticle",
      I: CreatePublishedArticleRequest,
      O: CreatePublishedArticleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * list published articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListPublishedArticles
     */
    listPublishedArticles: {
      name: "ListPublishedArticles",
      I: ListPublishedArticlesRequest,
      O: ListPublishedArticlesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * get published article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetPublishedArticleById
     */
    getPublishedArticleById: {
      name: "GetPublishedArticleById",
      I: GetPublishedArticleByIdRequest,
      O: GetPublishedArticleByIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * user activity updates
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UserActivity
     */
    userActivity: {
      name: "UserActivity",
      I: UserActivityRequest,
      O: UserActivityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * fetch the unseen articles for the user
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetNewsForUser
     */
    getNewsForUser: {
      name: "GetNewsForUser",
      I: GetNewsForUserRequest,
      O: GetNewsForUserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * upload newsroom images
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.StoreNewsroomImage
     */
    storeNewsroomImage: {
      name: "StoreNewsroomImage",
      I: StoreNewsroomImageRequest,
      O: StoreNewsroomImageResponse,
      kind: MethodKind.Unary,
    },
  }
};

