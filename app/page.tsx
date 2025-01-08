import EventList from "@/components/EventList";
import {createClient} from "@/utils/supabase/server";
import type {Tables} from "@/supabase/database.types";

type Event = Tables<'events'>; // No changes here

export default async function Home() {

    const supabase = await createClient()
    const { data } = await supabase.from('events').select().returns<Event[]>()

    console.log(data?.length)

    return (
    <div className="">
      <EventList serverEvents={data ?? []}/>
    </div>
  );
}
