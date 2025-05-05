"use client";

import { ReactNode } from "react";
import { Meta } from "./Meta";

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <>
            <Meta title="StarkCity - built on Citiverse" description="" />
            {children}
        </>
    );
}
