import React from 'react';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

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
        for (let i = 0; i < 200; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array})
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {} 

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = []
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortedArray = sortingAlgorithms.mergeSort(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))} 
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}></button>
            </div>
        );
    }
}

// from https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/#:~:text=To%20generate%20a%20random%20number%20within%20a%20range%20%5Bmin%2C%20max,floor(Math.
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}

export default SortingVisualizer