import React, { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { FaStar } from "react-icons/fa";

const createArray = (length: number) =>
    [...Array(length)].map(() => 0); // [0,0,0,0,0]

const Star = ({ selected = false, onSelect }) => {
    <FaStar
        color={selected ? "yellow" : "gray"}
        onClick={onSelect}
    />;
};

const StarRating = ({ totalStars = 5 }: { totalStars: number }) => {
    const [selectedStars, setSelectedStars] = useState<number>(0);
    return (
        <>
            {createArray(totalStars).map(
                (
                    star,
                    index, // Be careful!
                ) => (
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => index + 1}
                    />
                ),
            )}
            <p>
                {selectedStars} of {totalStars} stars selected.
            </p>
        </>
    );
};

const App = () => {
    return <StarRating totalStars={5} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
