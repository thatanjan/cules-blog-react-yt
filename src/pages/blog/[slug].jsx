import React from 'react'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import connectDb from 'mongoose/connectDb'
import Blog from 'mongoose/models/Blog'

import BlogHead from 'components/Blog/BlogHead'

import MdxComponents from 'components/MDX/MdxComponents'

const BlogPage = ({ mdxSource, blogData }) => {
	return (
		<>
			<BlogHead {...blogData} />
			<MDXRemote {...mdxSource} components={MdxComponents} />
		</>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	await connectDb()

	const project = {
		_id: 0,
		__v: 0,
	}

	const result = await Blog.findOne({ slug }, project)

	const { content, createdAt, ...blogData } = result.toObject()

	const mdxSource = await serialize(content)

	blogData.createdAt = createdAt.toDateString()

	return {
		props: { mdxSource, blogData },
	}
}

export const getStaticPaths = async () => {
	await connectDb()

	const slugs = await Blog.find({}, 'slug')

	const paths = slugs.map((item) => ({
		params: {
			slug: item.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export default BlogPage
