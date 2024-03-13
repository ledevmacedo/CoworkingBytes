export function Card({ children }) {
    return (
        <div
            className="p-4 rounded-2xl border-2 
        flex flex-col gap-2 shadow-custom">
            {children}
        </div>
    )
}