import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import { CURRENT_USER_QUERY } from "./User";
import DisplayError from "./ErrorMessage";
const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export const RequestReset = () => {
  const { inputs, handleChange, resetForm } = useForm({
    email: ""
  });
  const [requestPasswordReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs
      // refetchQueries: [{ query: CURRENT_USER_QUERY }]
    }
  );

  const handleSubmit = async e => {
    e.preventDefault();
    await requestPasswordReset();
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} disabled={loading}>
      <h2>Request A Password Reset</h2>
      <DisplayError error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email for a link!</p>
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
        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
};
