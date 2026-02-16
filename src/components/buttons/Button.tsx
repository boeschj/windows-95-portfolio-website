import { Button as BaseButton } from '@base-ui/react/button';
import { cn } from '@/utils';

import type { ComponentPropsWithRef } from 'react';

interface ButtonProps extends Omit<
    ComponentPropsWithRef<typeof BaseButton>,
    'className'
> {
    className?: string;
    pressed?: boolean;
}

export function Button({ className, pressed = false, ...props }: ButtonProps) {
    const borderStyle = pressed ? 'win95-border-sunken' : 'win95-border-raised';

    return (
        <BaseButton
            className={cn(
                borderStyle,
                'win95-focus-inset bg-windows-gray',
                className
            )}
            {...props}
        />
    );
}
