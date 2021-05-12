import React from "react";
import Head from "next/head";

const Post = ({}) => {
  return (
    <>
      <Head>
        <title></title>
        <meta title="description" content={""} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: "" }} />
    </>
  );
};
