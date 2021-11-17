import React, { useContext } from "react";
import Trivia from "../components/Trivia";
import { GameStateContext } from "../helpers/Context";

function LeftPanel() {
	const { earned, stop, handelePlayAgain } = useContext(GameStateContext);
	return (
		<div className="main">
			{stop ? (
				<>
					<div className="game-over">
						<h1 className="end-text">You Earned {earned}</h1>
						<div className="end-button" onClick={handelePlayAgain}>
							Play Again!
						</div>
					</div>
				</>
			) : (
				<>
					<div className="top"></div>
					<div className="top">
						<Trivia />
					</div>
				</>
			)}
		</div>
	);
}

export default LeftPanel;
