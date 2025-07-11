import React from 'react';

const iconProps = {
    strokeWidth: 1.5,
    fill: 'none',
    stroke: 'currentColor',
};

export function ThreadsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227l.173.013h9.24a2.708 2.708 0 002.707-2.707V12.75a2.708 2.708 0 00-2.707-2.707H6.375a2.708 2.708 0 00-2.707 2.707v3.227z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.125 12.75h15.75c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H4.125C3.504 5.25 3 5.754 3 6.375v5.25c0 .621.504 1.125 1.125 1.125z" />
        </svg>
    );
}


export function TrafficIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.182 3.182m3.182-3.182v3.182H19.5" />
        </svg>
    );
}

export function KeywordsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5m-13.5 7.5h13.5m-1.5-15l-3 15m-6-15l-3 15" />
        </svg>
    );
}

export function SerpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}