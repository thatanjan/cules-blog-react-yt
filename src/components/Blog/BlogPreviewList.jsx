import React from 'react'
import { nanoid } from 'nanoid'

import { Box, Heading } from '@chakra-ui/react'

import BlogPreviewCard from './BlogPreviewCard'

const BlogPreviewList = () => {
	return (
		<>
			<Box mt={8} mb={16}>
				<Heading
					sx={{
						textTransform: 'uppercase',
						mb: 8,
						fontSize: '5xl',
					}}
				>
					Top Blogs
				</Heading>

				{Array(10)
					.fill(0)
					.map(() => (
						<BlogPreviewCard key={nanoid()} />
					))}
			</Box>
		</>
	)
}

export default BlogPreviewList
