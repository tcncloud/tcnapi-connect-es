// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/newsroom/service.proto (package api.v1alpha1.newsroom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateNewsArticleRequest, CreateNewsArticleResponse, CreatePublishedArticleRequest, CreatePublishedArticleResponse, GetNewsArticleByIdRequest, GetNewsArticleByIdResponse, GetNewsForUserRequest, GetNewsForUserResponse, GetPublishedArticleByIdRequest, GetPublishedArticleByIdResponse, ListImagesForNewsArticleRequest, ListImagesForNewsArticleResponse, ListNewsArticlesRequest, ListNewsArticlesResponse, ListPublishedArticlesRequest, ListPublishedArticlesResponse, StoreNewsArticleImageRequest, StoreNewsArticleImageResponse, UpdateNewsArticleRequest, UpdateNewsArticleResponse, UserActivityRequest, UserActivityResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for interacting with TCN's Newsroom API system.
 * Accessing all of the methods Requestuire an authenticated user with the correct
 * permissions.
 *
 * @generated from service api.v1alpha1.newsroom.NewsroomAPI
 */
export declare const NewsroomAPI: {
  readonly typeName: "api.v1alpha1.newsroom.NewsroomAPI",
  readonly methods: {
    /**
     * create news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreateNewsArticle
     */
    readonly createNewsArticle: {
      readonly name: "CreateNewsArticle",
      readonly I: typeof CreateNewsArticleRequest,
      readonly O: typeof CreateNewsArticleResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list news articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListNewsArticles
     */
    readonly listNewsArticles: {
      readonly name: "ListNewsArticles",
      readonly I: typeof ListNewsArticlesRequest,
      readonly O: typeof ListNewsArticlesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * get news article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetNewsArticleById
     */
    readonly getNewsArticleById: {
      readonly name: "GetNewsArticleById",
      readonly I: typeof GetNewsArticleByIdRequest,
      readonly O: typeof GetNewsArticleByIdResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * update news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UpdateNewsArticle
     */
    readonly updateNewsArticle: {
      readonly name: "UpdateNewsArticle",
      readonly I: typeof UpdateNewsArticleRequest,
      readonly O: typeof UpdateNewsArticleResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * create published article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.CreatePublishedArticle
     */
    readonly createPublishedArticle: {
      readonly name: "CreatePublishedArticle",
      readonly I: typeof CreatePublishedArticleRequest,
      readonly O: typeof CreatePublishedArticleResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list published articles
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListPublishedArticles
     */
    readonly listPublishedArticles: {
      readonly name: "ListPublishedArticles",
      readonly I: typeof ListPublishedArticlesRequest,
      readonly O: typeof ListPublishedArticlesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * get published article details by the id
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetPublishedArticleById
     */
    readonly getPublishedArticleById: {
      readonly name: "GetPublishedArticleById",
      readonly I: typeof GetPublishedArticleByIdRequest,
      readonly O: typeof GetPublishedArticleByIdResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * user activity updates
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.UserActivity
     */
    readonly userActivity: {
      readonly name: "UserActivity",
      readonly I: typeof UserActivityRequest,
      readonly O: typeof UserActivityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * fetch the unseen articles for the user
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.GetNewsForUser
     */
    readonly getNewsForUser: {
      readonly name: "GetNewsForUser",
      readonly I: typeof GetNewsForUserRequest,
      readonly O: typeof GetNewsForUserResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * upload newsroom image for the news article
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.StoreNewsArticleImage
     */
    readonly storeNewsArticleImage: {
      readonly name: "StoreNewsArticleImage",
      readonly I: typeof StoreNewsArticleImageRequest,
      readonly O: typeof StoreNewsArticleImageResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list newsroom images
     *
     * @generated from rpc api.v1alpha1.newsroom.NewsroomAPI.ListImagesForNewsArticle
     */
    readonly listImagesForNewsArticle: {
      readonly name: "ListImagesForNewsArticle",
      readonly I: typeof ListImagesForNewsArticleRequest,
      readonly O: typeof ListImagesForNewsArticleResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

