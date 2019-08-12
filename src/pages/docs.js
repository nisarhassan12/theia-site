import React from 'react'
import Layout from '../layouts/layout'
import useDocs from '../hooks/use-docs'

const Docs = () => {
    const docs = useDocs()
    return (
        <Layout>
            {
                docs.map(doc => <pre>{JSON.stringify(doc, null, 2)}</pre>)
            }
        </Layout>
    )
}

export default Docs