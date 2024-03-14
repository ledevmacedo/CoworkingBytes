export function Filter() {
    return (
        <>
            <div className="flex gap-2 items-center justify-between">
                <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 p-3 w-full rounded-lg border-gray-300 text-zinc-700 sm:text-sm"
                >
                    <option value="">Hour</option>
                    <option value="0">00:00</option>
                    <option value="0">01:00</option>
                </select>

                <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 p-3 w-full rounded-lg border-gray-300 text-zinc-700 sm:text-sm"
                >
                    <option value="">Hour</option>
                    <option value="0">00:00</option>
                    <option value="0">01:00</option>
                </select>
            </div>
        </>
    )
}