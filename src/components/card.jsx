export function Card({ children, className }) {
    return (
        <div
            className="p-4 rounded-2xl 
        flex flex-col justify-center content-center items-center gap-2 shadow-custom">
            {children}
        </div>
    )
}