/* eslint react/jsx-key: 0 */

import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

import { Button, Flex, Box, chakra } from '@chakra-ui/react'

const CodeBlock = ({ children }) => {
	const [codeCopied, setCodeCopied] = useState(false)

	if (!children) return null

	const {
		props: { className, children: code = '' },
	} = children

	const language = className ? className.replace(/language-/, '') : ''

	const handleCopy = () => {
		navigator.clipboard.writeText(code)
		setCodeCopied(true)

		setTimeout(() => {
			setCodeCopied(false)
		}, 2000)
	}

	return (
		<Highlight
			{...defaultProps}
			theme={vsDark}
			code={code.trim()}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<>
					<Box
						sx={{
							position: 'relative',
						}}
					>
						<chakra.pre
							className={className}
							sx={{
								...style,
								p: 8,
								overflowX: 'auto',
								pt: 16,
							}}
						>
							<Button
								sx={{
									position: 'absolute',
									top: 4,
									right: 4,
								}}
								textTransform='uppercase'
								onClick={handleCopy}
								size='sm'
								colorScheme='teal'
							>
								{codeCopied ? 'Copied' : 'Copy'}
							</Button>

							{tokens.map((line, i) => (
								<div key={i} {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</chakra.pre>
					</Box>
				</>
			)}
		</Highlight>
	)
}

export default CodeBlock
