import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import { CURRENT_USER_QUERY } from "./User";
import DisplayError from "./ErrorMessage";
const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email

      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

export const Reset = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    token
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs
  });

  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken?.code
    : undefined;

  const handleSubmit = async e => {
    e.preventDefault();
    await reset();
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} disabled={loading}>
      <h2>Reset Your Password</h2>
      <DisplayError error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in</p>
        )}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
};
