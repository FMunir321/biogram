import { cn } from "../../lib/utils";
import { ChangeEvent } from "react";

interface FloatingLabelInputProps {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    className?: string;
    [key: string]: any;
}

export function FloatingLabelInput({
    label,
    value,
    onChange,
    type = "text",
    className,
    ...props
}: FloatingLabelInputProps) {
    const hasValue = Boolean(value && value.toString().length > 0);
    return (
        <div className="relative w-full">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={label}
                className={cn(
                    "peer w-full rounded-md  bg-transparent px-3 pt-5 pb-2 text-base text-black placeholder-transparent shadow-none outline-none focus:border-none focus:ring-0 focus:ring-none",
                    className
                )}
                {...props}
            />
            <label
                className={cn(
                    "absolute left-3 transition-all duration-200 text-base text-black",
                    {
                        "top-1 text-xs": hasValue, // Floating when there's a value
                        "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base": !hasValue,
                        "peer-focus:top-1 peer-focus:text-xs": true, // Always float on focus
                    }
                )}
            >
                {label}
            </label>
        </div>
    );
}
