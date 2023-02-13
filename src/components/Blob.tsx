import { useEffect, useRef, useState } from 'react';

export type BlobColor = 'green' | 'magenta' | 'blue' | 'cyan';
// export type BlobSize = 'large' | 'medium' | 'small';

export interface BlobProps {
	size: { width: number; height: number };
	color: BlobColor;
	wanderCoords: { x: number; y: number }[];
}

const Blob = ({ size, color, wanderCoords }: BlobProps) => {
	const [currentCoords, setCurrenCoords] = useState<{ x: number; y: number }>({
		x: window.innerWidth / 2 - size.width / 2,
		y: window.innerHeight / 2 - size.height / 2,
	});

	const interval = useRef<any>(null);

	useEffect(() => {
		let i = 0;
		clearTimeout(interval.current);
		interval.current = setInterval(() => {
			setCurrenCoords(wanderCoords[i]);
			i < wanderCoords.length - 1 ? (i += 1) : (i = 0);
		}, 1000);
	}, []);

	return (
		<div
			className="blob"
			style={{
				width: size.width,
				height: size.height,
				top: currentCoords?.y,
				left: currentCoords?.x,
				background: color,
				position: 'absolute',
				borderRadius: '50%',
				transition: 'all ease 1s',
				filter: 'blur(20px)',
				zIndex: -1,
			}}
		/>
	);
};

export default Blob;
