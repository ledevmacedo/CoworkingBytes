export function Title({ children }) {
    return (
        <h1 className="text-xl font-semibold">
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

export function Description({ children }) {
    return (
        <p className="text-sm font-normal">
            {children}
        </p>
    )
}