// import {createClient} from "@/utils/supabase/server";
// import type { Tables } from "@/supabase/database.types";
// import EventCard from "@/components/EventCard";
// import {CalendarDays, Ticket} from "lucide-react";
// type Event = Tables<'events'>;
//
// export default async function Events() {
//     // const [events, setEvents] = useState<Event[] | null>(null);
//
//     const supabase = await createClient()
//     //
//     // useEffect(() => {
//     //     const getData = async () => {
//     //         const { data } = await supabase.from('events').select()
//     //         setEvents(data)
//     //     }
//     //     getData()
//     // }, [])
//
//     const {data: events} = await supabase.from('events').select().returns<Array<Event>>()
//     //
//     // if (!events) {
//     //     return (
//     //         <div className="min-h-[400px] flex items-center justify-center">
//     //             <Spinner/>
//     //         </div>
//     //     );
//     // }
//     //
//
//     console.log("events", events[0].eventdate, );
//
//     const upcomingEvents = events
//         .filter((event) => new Date(event.eventdate).getTime() > Date.now())
//         .sort((a, b) => a.eventdate - b.eventdate)
//     const pastEvents = events
//         .filter((event) => new Date(event.eventdate).getTime() <= Date.now())
//         .sort((a, b) => b.eventDate - a.eventDate);
//     console.log("upcomingEvents", upcomingEvents.length);
//     console.log("pastEvents", pastEvents.length);
//
//     // return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//     //     {JSON.stringify(pastEvents, null, 2)}
//     // </div>
//     return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//             <div>
//                 <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
//                 <p className="mt-2 text-gray-600">
//                     Discover & book tickets for amazing events
//                 </p>
//             </div>
//             <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
//                 <div className="flex items-center gap-2 text-gray-600">
//                     <CalendarDays className="w-5 h-5"/>
//                     <span className="font-medium">
//               {upcomingEvents.length} Upcoming Events
//             </span>
//                 </div>
//             </div>
//         </div>
//
//
//
//
//     </div>;
// }
