"use client";

import type {Tables} from "@/supabase/database.types";

type Event = Tables<'events'>; // No changes here

export default function EventCard({event}: { event: Event }) {

    console.log(event.name)
    // const event: Event = events?.find((event) => event.id === eventId);
    // if (!event) {
    //     return null;
    // }
    //
    // const isPastEvent = event.eventDate < Date.now() || true;
    //
    // const isEventOwner = user?.id === event?.userId;

    const imageUrl = null


    if (imageUrl == null) {
        return (
            <div>
                {event.id} - {event.name}
            </div>
        )
    }
}

// return (
//     <div
//         onClick={() => router.push(`/event/${eventId}`)}
//         className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden relative`}
//     >
//          Event Image
//         {/*{imageUrl && (*/}
//         {/*    <div className="relative w-full h-48">*/}
//         {/*        <Image*/}
//         {/*            src={imageUrl}*/}
//         {/*            alt={event.name}*/}
//         {/*            fill*/}
//         {/*            className="object-cover"*/}
//         {/*            priority*/}
//         {/*        />*/}
//         {/*        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />*/}
//         {/*    </div>*/}
//         {/*)}*/}
//         <div className={`p-6 ${imageUrl ? "relative" : ""}`}>
//             <div className="flex justify-between items-start">
//                 <div>
//                     <div className="flex flex-col items-start gap-2">
//                         <h2 className="text-2xl font-bold text-gray-900">{event.name}</h2>
//                     </div>
//                     {isPastEvent && (
//                         <span
//                             className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
//             Past Event
//           </span>
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div>
//         );
//
//             }
