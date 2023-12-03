import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Senior Functionality Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Senior Functionality Facilitator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_xqe8f) => (
            <>
              <h1>{context_xqe8f?.Name}</h1>
            </>
          )}
          initialData={props.contextXqe8fProp}
          persistDataDuringLoading={true}
          key={props?.contextXqe8fProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextXqe8fProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextXqe8fProp: contextXqe8fProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
