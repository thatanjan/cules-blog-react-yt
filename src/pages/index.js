import Head from 'next/head'
import React from 'react'

import BlogPreviewList from 'components/Blog/BlogPreviewList'

const Home = () => {
	return (
		<>
			<Head>
				<title>Cules Blog</title>
			</Head>

			<BlogPreviewList />
		</>
	)
}

export default Home
