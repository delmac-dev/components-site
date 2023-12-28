import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../components/Wrapper';
import { createTiles, updateTiles, convertStr } from '@/lib/utils';
import { LayoutContext, useLayoutContext } from '../../hooks/context';
import { useMediaState } from '../../hooks/useMediaState';

const LayoutGrid = () => (
    <Wrapper title={"Layout Grid"}>
        <GridContainer>
            <Tile id={2} xPos={"4"} yPos={"3"} xs={"9"} ys={"4"} >
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <h1 className="font-extrabold text-5xl text-foreground tracking-wider">Delali Tengue</h1>
                    <p className="text-xl text-foreground/80 font-semibold tracking-widest mt-5">I'm a Fullstack Web Developer</p>
                </div>
            </Tile>
            <div className="absolute top-11 left-1/2 -translate-x-1/2 rounded-full py-1 px-6 bg-accent border border-primary flex items-center justify-center shadow-md">
                <p className="text-md text-primary font-semibold">Hi there</p>
            </div>
        </GridContainer>
    </Wrapper>
)

const GridContainer = ({children}) => {
    const containerRef = useRef();
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [tiles, setTiles] = useState([]);
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const calculateGrid = () => {
          setColumns(Math.floor(containerRef?.current?.clientWidth / 50) || 0);
          setRows(Math.floor(containerRef?.current?.clientHeight / 50) || 0);
        };
    
        // Attach the resize event listener to the window
        const handleResize = () => {
          calculateGrid();
        };
    
        window.addEventListener("resize", handleResize);
    
        // Initial calculation
        calculateGrid();
    
        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [containerRef]);
        
    useEffect(() => {
        setTiles(createTiles(columns, rows));
        //create layout
        createLayout()
    }, [columns, rows, elements]);

    const contextValue = {
        tiles, setTiles, elements, setElements, containerRef
    }

    const createLayout = () => {
        setTiles(createTiles(columns, rows));
    
        if (!elements || elements.length === 0) return;
    
        elements.forEach((element) => {
            const { xPos, yPos, xSpan, ySpan } = element;
        
            // If xSpan and ySpan are both 0, update the tile at xPos, yPos to occupied
            if (xSpan === 0 && ySpan === 0) {
                setTiles((prevTiles) => updateTiles(prevTiles, xPos, yPos));
            } else {
                // If xSpan or ySpan is not 0, create a list of points
                const xPoints = Array.from({ length: xSpan }, (_, i) => xPos + i);
                const yPoints = Array.from({ length: ySpan }, (_, i) => yPos + i);
        
                // Create pairs of x and y points
                const pairs = [];
                xPoints.forEach((x) => {
                    yPoints.forEach((y) => {
                        pairs.push([x, y]);
                    });
                });
        
                // Update tiles based on pairs
                setTiles((prevTiles) => {
                    const updatedTiles = prevTiles.map((tile) => {
                        if (pairs.some(([x, y]) => tile.xPos === x && tile.yPos === y)) {
                        return { ...tile, occupied: true };
                        }
                        return tile;
                    });
                    return updatedTiles;
                });
            }
        });
    };

    return (
        <LayoutContext.Provider value={contextValue}>
            <div 
                ref={containerRef}
                className="relative h-96 lg:h-[420px] w-full max-w-3xl grid bg-primary/80"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }}
            >
                {tiles.filter((tile) => tile.occupied === false).map(({xPos, yPos}, index) => (
                    <AutoTile key={index} yPos={yPos} xPos={xPos} />
                ))}

                { tiles.length !== 0 ? (children) : ''}
            </div>
        </LayoutContext.Provider>
    )
}

const Tile = ({id, ys, xs, xPos, yPos, center, position, yOffset, children}) => {
    const mediaScreen = [320, 620, 920, 1080, 2046];
    const [tile, setTile] = useState();
    const [xPosition] = useMediaState(convertStr(xPos), mediaScreen);
    const [yPosition] = useMediaState(convertStr(yPos), mediaScreen);
    const [xSpan] = useMediaState(convertStr(xs), mediaScreen);
    const [ySpan] = useMediaState(convertStr(ys), mediaScreen);
    const { setElements } = useLayoutContext();

    useEffect(() => {
        if (!id) throw Error("provide id");
        const newTile = {
            id: id,
            center: center | true,
            xPos: xPosition,
            yPos: yPosition,
            xSpan: xSpan | 0,
            ySpan: ySpan | 0,
            yOffset: yOffset | 0,
            position: position | "relative"
        };
        setTile(newTile);
    }, [ xPosition, yPosition, xSpan, ySpan ])

    useEffect(()=> {
       if(!tile) return;
       const newElement = {
        id: tile.id,
        xPos: tile.xPos,
        yPos: tile.yPos,
        xSpan: tile.xSpan,
        ySpan: tile.ySpan
       }

       setElements((prevElements) => {
        const existingIndex = prevElements.findIndex((element) => element.id === tile.id);
    
        if (existingIndex !== -1) {
          // If the element id exists, update the element
          const updatedElements = [...prevElements];
          updatedElements[existingIndex] = newElement;
          return updatedElements;
        } else {
          // If the id doesn't exist, add it to elements
          return [...prevElements, newElement];
        }
      }); 
    }, [tile]);
    
    return (
        <>
            {tile && (<div
                className='relative'
                style={{
                    gridArea: `${tile.yPos} / ${tile.xPos} / ${tile.ySpan + tile.yPos} / ${tile.xSpan + tile.xPos}`
                }}
            >
                <div className="absolute inset-[1px] bg-secondary flex items-center justify-center">
                    {children}
                </div>
            </div>)}
        </>
)};

const AutoTile = ({xPos, yPos}) => {

    return (
    <div
        className='relative'
        style={{
            gridArea: `${yPos} / ${xPos}`
        }}
    >
        <div className="absolute inset-[1px] bg-secondary" />
    </div>
)};

export default LayoutGrid;