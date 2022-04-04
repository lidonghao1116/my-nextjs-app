import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

  
export default function FirstPost({allPostsData}) {
  return (
    <Layout>
    <Head>
        <title>First Post1</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home1</a>
        </Link>
      </h2>

      <section>
      <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
      </Layout>
  )
}