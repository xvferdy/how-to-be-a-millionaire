import { useState, useEffect } from "react";
import "./App.css";
import questionsDb from "./helpers/questionsDb";
import moneyPyramid from "./helpers/moneyPyramid";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";
import { GameStateContext } from "./helpers/Context";

function App() {
	const [questionNumber, setQuestionNumber] = useState(1);
	const [stop, setStop] = useState(false);
	const [earned, setEarned] = useState("Rp. 0");

	useEffect(() => {
		if (questionNumber > 1) {
			setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
		}
	}, [questionNumber]);

	const handelePlayAgain = () => {
		setStop(false);
		setQuestionNumber(1);
		setEarned("$ 0");
	};

	return (
		<div className="app">
			<GameStateContext.Provider
				value={{
					earned,
					stop,
					handelePlayAgain,
					questionsDb,
					questionNumber,
					setQuestionNumber,
					setStop,
					setEarned,
					moneyPyramid,
				}}
			>
				{/* MAIN */}
				<LeftPanel />

				{/* PYRAMID */}
				<RightPanel questionNumber={questionNumber} />
			</GameStateContext.Provider>
		</div>
	);
}

export default App;
