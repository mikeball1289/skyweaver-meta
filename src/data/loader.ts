import { MetaData } from "./MetaData";

export function loadData() {
    return Promise.all([
        fetch('/metadata.json').then(r => r.json()),
        // apply artificial delay on fast internet connection for smoother experience
        later(800)
    ]).then(([d]) => d as MetaData);
}

function later(delay: number) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}