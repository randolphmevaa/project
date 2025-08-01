import { featuredEvents } from "@/lib/data";
import AgendaList from "@/components/events/agenda-list";

export const metadata = {
  title: 'Agenda | Rockhal',
  description: 'Browse upcoming events and concerts at Rockhal. Find tickets and event information.',
};

export default function AgendaPage() {
  return <AgendaList events={featuredEvents} />;
}