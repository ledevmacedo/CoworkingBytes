export function Card({ children }) {
    return (
        <div
            className="p-4 rounded-2xl 
        flex flex-col gap-2 shadow-custom">
            {children}
        </div>
    )
}