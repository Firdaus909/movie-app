import React from "react";
import { Button, Result } from "antd";
import { Link, redirect } from "react-router-dom";

const NotFound = () => {
  const BackButton = () => (
    <Link to={"/"}>
      <Button type="primary">Back Home</Button>
    </Link>
  );
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<BackButton />}
    />
  );
};

export default NotFound;
