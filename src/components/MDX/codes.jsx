import { Code } from '@chakra-ui/react'

import Wrapper from './Wrapper'
import CodeBlock from './Codeblock'

const components = {}

components.code = (props) => (
	<Code fontSize={['md', 'lg', 'xl']} m='0 .5rem' {...props} />
)

components.pre = (props) => (
	<Wrapper>
		<CodeBlock {...props} />
	</Wrapper>
)

export default components
