import { gql } from "apollo-boost";

import { recipeFragments } from "./fragments";

//Recipes queries
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      imageUrl
      name
      category
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
      ...CompleteRecipe
    }
  }
  ${recipeFragments.recipe}
`;

export const SEARCH_RECIPE = gql`
  query($searchTerm: String) {
    searchRecipe(searchTerm: $searchTerm) {
      _id
      name
      likes
    }
  }
`;

//Recipies Mutations
export const ADD_RECIPE = gql`
  mutation(
    $name: String!
    $imageUrl: String!
    $description: String!
    $category: String!
    $instructions: String!
    $username: String
  ) {
    addRecipe(
      name: $name
      imageUrl: $imageUrl
      description: $description
      category: $category
      instructions: $instructions
      username: $username
    ) {
      ...CompleteRecipe
    }
  }
  ${recipeFragments.recipe}
`;

export const DELETE_USER_RECIPE = gql`
  mutation($_id: ID!) {
    deleteUserRecipe(_id: $_id) {
      _id
    }
  }
`;

export const LIKE_RECIPE = gql`
  mutation($_id: ID!, $username: String!) {
    likeRecipe(_id: $_id, username: $username) {
      ...LikeRecipe
    }
  }
  ${recipeFragments.like}
`;

export const UNLIKE_RECIPE = gql`
  mutation($_id: ID!, $username: String!) {
    unlikeRecipe(_id: $_id, username: $username) {
      ...LikeRecipe
    }
  }
  ${recipeFragments.like}
`;

// User Queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        _id
        name
      }
    }
  }
`;

export const GET_USER_RECIPES = gql`
  query($username: String!) {
    getUserRecipes(username: $username) {
      _id
      name
      likes
      imageUrl
      category
      description
    }
  }
`;

// User Mutations

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
