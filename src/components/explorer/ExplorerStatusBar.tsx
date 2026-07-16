interface ExplorerStatusBarProps {
    label: string;
}

export function ExplorerStatusBar({ label }: ExplorerStatusBarProps) {
    return (
        <div className="flex flex-none gap-0.5 pt-0.75">
            <div className="win95-status-panel flex-1 px-2.5 py-0.5 text-[15px] whitespace-nowrap">
                {label}
            </div>
            <div className="win95-status-panel hidden flex-1 px-2.5 py-0.5 md:block" />
            <div className="win95-status-panel hidden w-50 px-2.5 py-0.5 md:block" />
        </div>
    );
}
