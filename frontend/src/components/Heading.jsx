import * as React from 'react';
import { cn } from '@/lib/utils';

function Heading({ level = 'h2', className, children }) {
	const Tag = level; // dynamically use h1, h2, h3...
	return (
		<Tag
			className={cn(
				'font-bold tracking-tight text-foreground',
				level === 'h1' && 'text-3xl',
				level === 'h2' && 'text-2xl',
				level === 'h3' && 'text-xl',
				className,
			)}
		>
			{children}
		</Tag>
	);
}

export { Heading };
