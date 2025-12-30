export default function Countdown() {
    // TODO: Implement actual countdown logic
    const timeUnits = [
        { value: 14, label: "Hari" },
        { value: 8, label: "Jam" },
        { value: 45, label: "Menit" },
        { value: 20, label: "Detik" }
    ];

    return (
        <div className="grid grid-cols-4 gap-3 text-center w-full">
            {timeUnits.map((unit) => (
                <div key={unit.label} className="flex flex-col items-center p-3 bg-white dark:bg-[#2d161c] rounded-xl shadow-soft">
                    <span className="text-xl font-bold text-primary">{unit.value.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400">{unit.label}</span>
                </div>
            ))}
        </div>
    );
}
