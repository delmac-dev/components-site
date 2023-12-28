import React, { useEffect, useRef, useState } from 'react';
import Wrapper from '../components/Wrapper';
import './styles/grid.css';
import { createTiles } from '@/lib/utils';

const AnimatedGrid = () => {
    const containerRef = useRef(null);
    const [boxes, setBoxes] = useState([]);
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setColumns(Math.floor(containerRef?.current?.clientWidth / 50) | 0);
            setRows(Math.floor(containerRef?.current?.clientHeight / 50) | 0); 
        })
    }, []);

    useEffect(() => {
        setColumns(Math.floor(containerRef?.current?.clientWidth / 50) | 0);
        setRows(Math.floor(containerRef?.current?.clientHeight / 50) | 0);
    }, [containerRef]);
    
    useEffect(() => {
        setBoxes(createTiles(columns, rows));
    }, [columns, rows]);

    return (
    <Wrapper title={"Animated Grid"}>
        <div 
            ref={containerRef} 
            className="relative w-full max-w-3xl h-96 bg-primary/80 grid"
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`
            }}
        >
            {boxes.map(({xPos, yPos}, index) => (
                <Box key={index} yPos={yPos} xPos={xPos} />
            ))}
        </div>
    </Wrapper>
    )
}

export default AnimatedGrid;

const Box = ({ySpan = 0, xSpan = 0, xPos, yPos}) => {

    return (
        <div
            className='relative'
            style={{
                gridArea: `${xPos} / ${yPos} / ${xSpan} / ${ySpan}`
            }}
        >
            <div className="absolute inset-[1px] bg-secondary" />
        </div>
    )
}