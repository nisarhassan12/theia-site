import React from 'react'
import DocsLayout from '../layouts/docs-layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const DocTemplate = ({ data: { mdx: doc } }) => (
    <DocsLayout>
        <h1>{doc.title}</h1>
        <MDXRenderer>{doc.body}</MDXRenderer>
    </DocsLayout>
)

export default DocTemplate