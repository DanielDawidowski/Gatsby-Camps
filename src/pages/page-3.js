import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

const getImageData = graphql`
{
	allFile {
	  edges {
      node {
        relativePath
        size
        extension
        birthTime
      }
    }
	}
}
`

export default () => {
    const data = useStaticQuery(getImageData)
    return (
    <Layout>
        <h1>hello page 3</h1>
        <h3>Image File Data</h3>
        <table>
            <thead>
                <tr>
                    <th>Relative Path</th>
                    <th>Size of Image</th>
                    <th>Extansion</th>
                    <th>Birhtime</th>
                </tr>
            </thead>
            <tbody>{data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                    <td>{node.relativePath}</td>
                    <td>{node.size}</td>
                    <td>{node.extansion}</td>
                    <td>{node.birthTime}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <Link to='/page-2'>Go to page 2</Link>
    </Layout>
    
    )
}