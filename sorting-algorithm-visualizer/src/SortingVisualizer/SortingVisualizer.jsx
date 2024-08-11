import React from 'react';
import {mergeSortAnimations, bubbleSortAnimations, heapSortAnimations, quickSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

// speed of animation
const ANIMATION_SPEED_MS = 1;

// how many numbers in array to be sorted
const NUMBER_OF_ARRAY_BARS = 200;

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    // when the component is first loaded, call resetArray to load a new randomized array
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array})
    }

    mergeSort() {
        const animations = mergeSortAnimations(this.state.array);
        for (let i = 0; i  < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = quickSortAnimations(this.state.array);
        for (let i = 0; i  < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [itemOne, itemTwo, action] = animations[i];
            if (action !== "swap") {
                const barOneStyle = arrayBars[itemOne].style;
                const barTwoStyle = arrayBars[itemTwo].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = action;
                    barTwoStyle.backgroundColor = action;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[itemOne].style;
                    barOneStyle.height = `${itemTwo}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort() {
        const animations = heapSortAnimations(this.state.array);
        for (let i = 0; i  < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [itemOne, itemTwo, action] = animations[i];
            if (action !== "swap") {
                const barOneStyle = arrayBars[itemOne].style;
                const barTwoStyle = arrayBars[itemTwo].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = action;
                    barTwoStyle.backgroundColor = action;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[itemOne].style;
                    barOneStyle.height = `${itemTwo}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        const animations = bubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                console.log(animations[i]);
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar"
                            key={idx}
                            style={{height: `${value}px`}}></div>
                    ))}
                </div>
                <div className="button-container">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}

// from https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/#:~:text=To%20generate%20a%20random%20number%20within%20a%20range%20%5Bmin%2C%20max,floor(Math.
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer
