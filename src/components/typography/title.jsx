export function Title({ children, variant }) {
    return (
        <h1 className={`text-xl ${variant == "normal" ? "font-normal ": "font-semibold"}`}>
            {children}
        </h1>
    )
}

export function Subtitle({ children }) {
    return (
        <p className="text-base font-normal">
            {children}
        </p>
    )
}

export function Description({ children, opacity }) {
    return (
        <p className={` text-sm font-normal ${opacity ? "opacity-80" : ""}`}>
            {children}
        </p>
    )
}