export default function GameBoard({ onSelectSquare, board }){
    // const [ gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <>
            <ol id="game-board">
                {board.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playeSymbol, colIndex) => <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playeSymbol !== null}>{playeSymbol}</button>
                        </li>)}
                    </ol>
                </li>)}
            </ol>
        </>
    )
}