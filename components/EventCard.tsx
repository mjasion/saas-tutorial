"use client";

import {useUser} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

import {createClient} from "@/utils/supabase/client";


export default function EventCard({eventId}: { eventId: Number }) {
    const {user} = useUser();
    const router = useRouter();
    const supabase = await createClient()
    const {data: event} = supabase.from('events').eq('id', eventId).select().returns<Event>()



    if (!event) {
        return null;
    }

    const isPastEvent = event.eventDate < Date.now() || true;

    const isEventOwner = user?.id === event?.userId;

    return (
        <div key={event.id}>
            {event.name}
        </div>
    );
}
