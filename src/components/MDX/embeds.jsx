import { YouTube, Gist, CodePen, CodeSandbox, Tweet } from 'mdx-embed'

import Wrapper from './Wrapper'

const customTweet = (props) => <Tweet theme='dark' align='center' {...props} />

const embedComponents = {
	YouTube,
	Gist,
	CodePen,
	CodeSandbox,
	Tweet: customTweet,
}

const components = {}

Object.keys(embedComponents).forEach((key) => {
	const Component = embedComponents[key]
	components[key] = (props) => (
		<Wrapper>
			<Component {...props} />
		</Wrapper>
	)
})

export default components
