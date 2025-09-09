import React from 'react';
import Tomorrow from './Tomorrow';
import Today from './Today';
import Week from './Week';
import { Badge } from '@/components/ui/badge';
import { ScrollText } from 'lucide-react';

const Home = () => {
	return (
		<div className="min-h-screen py-8">
			<div className="inline-flex items-center rounded-base border-2 p-2 px-4 gap-2 bg-main">
				<ScrollText size={32} />
				<span className="text-3xl font-semibold">Upcoming</span>
			</div>
			<Today />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
				<Tomorrow />
				<Week />
			</div>
		</div>
	);
};

export default Home;
