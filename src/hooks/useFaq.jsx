import { useState } from "react";
function useFaq() {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
    return { showAnswer, toggleAnswer }
}

export { useFaq };

