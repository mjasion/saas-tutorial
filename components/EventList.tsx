"use client";

import Spinner from "@/components/Spinner";
import {createClient} from "@/utils/supabase/client";
import {useEffect, useState} from "react";
import {CalendarDays, Ticket} from "lucide-react";
import type {Tables} from "@/supabase/database.types";
import EventCard from "@/components/EventCard";

type Event = Tables<'events'>;

export default function EventList({serverEvents}: { serverEvents: Event[] }) {
    const [events, setEvents] = useState(serverEvents);

    const supabase = createClient()

    useEffect(() => {
        const channel = supabase.channel('realtime events').on('postgres_changes', {
            event: '*',
            schema: 'public'
        }, (payload) => {
            if (payload.eventType === 'DELETE') {
                setEvents(events.filter(event => event.id !== payload.old.id))
                return
            }
            const updatedEvent = payload.new as Event;
            console.log('Change received!', updatedEvent.name)
            const newEvents = events.some(event => event.id === updatedEvent.id) ?
                events.map(event => event.id === updatedEvent.id ? updatedEvent : event) :
                [...events, updatedEvent];
            setEvents(newEvents)
        }).subscribe()
        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, events, setEvents])

    if (!events) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <Spinner/>
            </div>
        );
    }

    const upcomingEvents = events
        .filter((event) => new Date(event.eventdate).getTime() > Date.now())
        .sort((a, b) => new Date(a.eventdate).getTime() - new Date(b.eventdate).getTime())
    const pastEvents = events
        .filter((event) => new Date(event.eventdate).getTime() <= Date.now())
        .sort((a, b) => new Date(b.eventdate).getTime() - new Date(a.eventdate).getTime());

    //     {JSON.stringify(pastEvents, null, 2)}
    // </div>
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
                <p className="mt-2 text-gray-600">
                    Discover & book tickets for amazing events
                </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="w-5 h-5"/>
                    <span className="font-medium">
              {upcomingEvents.length} Upcoming Events
            </span>
                </div>
            </div>
        </div>


        {/* Upcoming Events Grid */}
        {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </div>
        ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center mb-12">
                <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4"/>
                <h3 className="text-lg font-medium text-gray-900">
                    No upcoming events
                </h3>
                <p className="text-gray-600 mt-1">Check back later for new events</p>
            </div>
        )}

        {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </div>
        ) : (<div></div>)}


    </div>;
}
