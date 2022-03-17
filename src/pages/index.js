import Head from 'next/head'
import React from 'react'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import connectDb from 'mongoose/connectDb'
import Blog from 'mongoose/models/Blog'

import BlogPreviewList from 'components/Blog/BlogPreviewList'
import getFileNames from 'utils/getFileNames'
import readBlogFiles from 'utils/readBlogFiles'

const Home = ({ topBlogs, recentBlogs }) => {
	return (
		<>
			<Head>
				<title>Cules Blog</title>
			</Head>

			<BlogPreviewList header='Top Blogs' blogs={topBlogs} />
			<BlogPreviewList header='Recent Blogs' blogs={recentBlogs} />
		</>
	)
}

export default Home

export const getStaticProps = async () => {
	await connectDb()

	const fileNames = getFileNames()

	const allParsedData = fileNames.map((fileName) => {
		const slug = fileName.replace('.mdx', '')

		const parsedFile = readBlogFiles(fileName)

		const { data, content } = matter(parsedFile)

		data.readingTime = readingTime(content).text
		data.slug = slug
		data.content = content

		return data
	})

	const blogBulkUpdateArray = allParsedData.map((blog) => ({
		updateOne: {
			filter: { customID: blog.customID },
			update: {
				$set: blog,
			},
			upsert: true,
			setDefaultOnInsert: true,
		},
	}))

	await Blog.bulkWrite(blogBulkUpdateArray)

	const project = {
		_id: 0,
		_v: 0,
		content: 0,
	}

	const limit = 10

	const topBlogsResult = await Blog.find({}, project)
		.sort('-totalViews')
		.limit(limit)

	const recentBlogsResult = await Blog.find({}, project)
		.sort('-createdAt')
		.limit(limit)

	const topBlogs = topBlogsResult.map((blog) => {
		const blogObject = blog.toObject()

		blogObject.createdAt = blogObject.createdAt.toDateString()

		return blogObject
	})

	const recentBlogs = recentBlogsResult.map((blog) => {
		const blogObject = blog.toObject()

		blogObject.createdAt = blogObject.createdAt.toDateString()

		return blogObject
	})

	return {
		props: { topBlogs, recentBlogs },
	}
}
