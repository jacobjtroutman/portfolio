'use client'

interface Props {
    color: "orange" | "pink" | "red"
    text: string
}

const colorMap = {
    orange: "bg-orange-500/10 text-orange-400",
    pink: "bg-pink-500/10 text-pink-400",
    red: "bg-red-500/10 text-red-400"

}

export default function Pill(props: Props){
    return(<span className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm ${colorMap[props.color]}`}>{props.text}</span>);
}