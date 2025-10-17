"use client";
// Form: Online table booking -> opens WhatsApp pre-filled message (no backend)
import { FormEvent, useState } from "react";
import { data } from "@/lib/data";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("18:00");
  const [note, setNote] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Table Booking Request\nName: ${name}\nPeople: ${people}\nDate: ${date}\nTime: ${time}\nNote: ${note}`
    );
    const phone = data.cafeInfo.whatsapp.replace(/\D/g, "");
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="card p-6 grid md:grid-cols-2 gap-4">
      {/* This section handles reservation inputs */}
      <div>
        <label className="text-sm font-semibold">Your Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-coffee-200 p-3"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="text-sm font-semibold">People</label>
        <input
          type="number"
          min={1}
          max={12}
          value={people}
          onChange={(e) => setPeople(parseInt(e.target.value || "1"))}
          className="mt-1 w-full rounded-xl border border-coffee-200 p-3"
        />
      </div>
      <div>
        <label className="text-sm font-semibold">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-coffee-200 p-3"
        />
      </div>
      <div>
        <label className="text-sm font-semibold">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-coffee-200 p-3"
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-semibold">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-xl border border-coffee-200 p-3"
          placeholder="Any special request?"
        />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary w-full">
          Book via WhatsApp
        </button>
      </div>
    </form>
  );
}
