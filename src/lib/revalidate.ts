type RevalidateTarget = string | [path: string, type: 'layout' | 'page'];

export async function revalidatePaths(...targets: RevalidateTarget[]) {
    try {
        const { revalidatePath } = await import('next/cache');

        for (const target of targets) {
            if (typeof target === 'string') {
                revalidatePath(target);
            } else {
                revalidatePath(target[0], target[1]);
            }
        }
    } catch {
        // revalidatePath only works inside the Next.js request context (the
        // admin API routes); ignore when Payload runs elsewhere (CLI, seeds).
    }
}
