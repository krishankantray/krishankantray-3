import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NotFound from '../images/404.svg' 

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <img src={NotFound} height={400} width={500} />
  </Layout>
)

export default NotFoundPage
