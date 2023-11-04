"use client";
import { useBugpilot } from "@bugpilot/next";
import { useEffect } from "react";

type BugpilotUser = {
    id?: string | null,
    email?: string | null,
    name?: string | null,
    image?: string | null,
}

export default function BugpilotComponent({ user }: { user: BugpilotUser }) {
    const { identify } = useBugpilot();
    useEffect(() => {
        identify(user);
    }, [identify, user]);

    return null;
};