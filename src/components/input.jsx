export function Input({ label, type, id, onChange, required, placeholder }) {
    // type={type}
    // id={id}
    // placeholder={placeholder}
    // onChange={onChange}
    // required={required}>
    return (
        <div className="flex gap-2 flex-col">
            <label for="fname">{label}</label>
            <input className="border-2 text-base border-zinc-950 px-4 py-2 rounded-2xl capitalize">
            </input>
        </div>
    )
}