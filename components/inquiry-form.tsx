"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectType = "Wedding" | "Brand" | "Event" | "Other";

type FormState = {
  projectType: ProjectType | "";
  date: string;
  location: string;
  budget: string;
  // wedding-only
  venue: string;
  guestCount: string;
  // brand-only
  company: string;
  // common
  name: string;
  email: string;
  phone: string;
  message: string;
  referral: string;
};

const INITIAL: FormState = {
  projectType: "",
  date: "",
  location: "",
  budget: "",
  venue: "",
  guestCount: "",
  company: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  referral: "",
};

const TYPES: { value: ProjectType; label: string; tag: string }[] = [
  {
    value: "Wedding",
    label: "Wedding",
    tag: "A wedding film for your day",
  },
  {
    value: "Brand",
    label: "Brand film",
    tag: "Content, campaigns, retainer",
  },
  { value: "Event", label: "Event", tag: "Tournament, conference, festival" },
  { value: "Other", label: "Something else", tag: "Tell me more" },
];

const BUDGETS = [
  "Under $2,000",
  "$2,000–$4,500",
  "$4,500–$7,500",
  "$7,500–$12,000",
  "$12,000+",
  "Not sure yet",
];

export function InquiryForm({
  defaultType = "Wedding",
}: {
  defaultType?: ProjectType;
}) {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<FormState>({
    ...INITIAL,
    projectType: defaultType,
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setState((s) => ({ ...s, [k]: v }));

  const isWedding = state.projectType === "Wedding";
  const isBrand = state.projectType === "Brand";
  const isEvent = state.projectType === "Event";

  // Steps: 0 = type, 1 = project details, 2 = budget + timeline, 3 = contact
  const TOTAL = 4;

  const stepValid = () => {
    if (step === 0) return state.projectType !== "";
    if (step === 1) {
      if (isWedding) return state.date && state.venue;
      if (isBrand) return state.company && state.location;
      if (isEvent) return state.date && state.location;
      return state.message.length > 4;
    }
    if (step === 2) return state.budget !== "";
    if (step === 3)
      return state.name.trim() !== "" && /.+@.+\..+/.test(state.email);
    return false;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
    } catch (err) {
      setError("Something went wrong. Email blackrabbitcreative@yahoo.com.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rabbit/15 text-rabbit">
          <Check className="h-6 w-6" />
        </div>
        <h2 className="mt-6 font-display text-3xl tracking-tightish text-bone">
          Got it — talk soon.
        </h2>
        <p className="mx-auto mt-3 max-w-prose text-stone">
          I read every inquiry myself. You'll hear back within two
          business days with availability and a few follow-up questions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-hairline bg-surface p-6 md:p-10"
    >
      <div className="mb-8 flex items-center gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-stone">
          Step {step + 1} / {TOTAL}
        </p>
        <div className="h-px flex-1 bg-hairline">
          <div
            className="h-px bg-rabbit transition-all"
            style={{ width: `${((step + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="font-display text-3xl tracking-tightish text-bone md:text-4xl">
            What are we making?
          </legend>
          <p className="mt-2 text-stone">
            This shapes the rest of the inquiry. You can switch later.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {TYPES.map((t) => {
              const active = state.projectType === t.value;
              return (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => update("projectType", t.value)}
                  className={cn(
                    "rounded-xl border p-5 text-left transition",
                    active
                      ? "border-rabbit bg-rabbit/10"
                      : "border-hairline hover:border-bone/30",
                  )}
                >
                  <p className="font-display text-xl text-bone">
                    {t.label}
                  </p>
                  <p className="mt-1 text-sm text-stone">{t.tag}</p>
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="font-display text-3xl tracking-tightish text-bone md:text-4xl">
            {isWedding && "Tell me about the wedding."}
            {isBrand && "Tell me about the brand."}
            {isEvent && "Tell me about the event."}
            {state.projectType === "Other" && "Tell me about the project."}
          </legend>
          <div className="mt-6 grid gap-5">
            {isWedding && (
              <>
                <Field label="Wedding date" required>
                  <input
                    type="date"
                    value={state.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Venue (or city)" required>
                  <input
                    type="text"
                    value={state.venue}
                    onChange={(e) => update("venue", e.target.value)}
                    placeholder="Armature Works, Tampa"
                    className={inputCls}
                  />
                </Field>
                <Field label="Approximate guest count">
                  <input
                    type="text"
                    value={state.guestCount}
                    onChange={(e) =>
                      update("guestCount", e.target.value)
                    }
                    placeholder="120"
                    className={inputCls}
                  />
                </Field>
              </>
            )}
            {isBrand && (
              <>
                <Field label="Company / brand" required>
                  <input
                    type="text"
                    value={state.company}
                    onChange={(e) => update("company", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Shoot city" required>
                  <input
                    type="text"
                    value={state.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="Tampa, FL"
                    className={inputCls}
                  />
                </Field>
                <Field label="Target shoot date (if known)">
                  <input
                    type="date"
                    value={state.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputCls}
                  />
                </Field>
              </>
            )}
            {isEvent && (
              <>
                <Field label="Event date" required>
                  <input
                    type="date"
                    value={state.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputCls}
                  />
                </Field>
                <Field label="Event name + location" required>
                  <input
                    type="text"
                    value={state.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="Wodapalooza, Miami"
                    className={inputCls}
                  />
                </Field>
              </>
            )}
            <Field
              label={
                state.projectType === "Other"
                  ? "What are you trying to make?"
                  : "Anything else I should know?"
              }
              required={state.projectType === "Other"}
            >
              <textarea
                value={state.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className={inputCls}
                placeholder="Tone, references, must-haves, hard constraints…"
              />
            </Field>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="font-display text-3xl tracking-tightish text-bone md:text-4xl">
            Budget you're working with?
          </legend>
          <p className="mt-2 text-stone">
            Rough range is fine — it helps me match the scope to what's
            possible.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {BUDGETS.map((b) => {
              const active = state.budget === b;
              return (
                <button
                  type="button"
                  key={b}
                  onClick={() => update("budget", b)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm transition",
                    active
                      ? "border-rabbit bg-rabbit/10 text-bone"
                      : "border-hairline text-bone/85 hover:border-bone/30",
                  )}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend className="font-display text-3xl tracking-tightish text-bone md:text-4xl">
            Where can I reach you?
          </legend>
          <div className="mt-6 grid gap-5">
            <Field label="Your name" required>
              <input
                type="text"
                value={state.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                value={state.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={state.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="How did you hear about Black Rabbit?">
              <input
                type="text"
                value={state.referral}
                onChange={(e) => update("referral", e.target.value)}
                placeholder="Instagram, a friend, a vendor, Google…"
                className={inputCls}
              />
            </Field>
          </div>
          {error && (
            <p className="mt-4 text-sm text-rabbit">{error}</p>
          )}
        </fieldset>
      )}

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm text-stone transition hover:text-bone disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {step < TOTAL - 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!stepValid()}
            className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm text-ink transition hover:bg-bone/90 disabled:opacity-40"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!stepValid() || submitting}
            className="inline-flex items-center gap-2 rounded-full bg-rabbit px-5 py-2.5 text-sm text-bone transition hover:bg-rabbit/90 disabled:opacity-50"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
            Send inquiry
          </button>
        )}
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-hairline bg-ink/60 px-4 py-3 text-bone placeholder:text-stone/60 outline-none transition focus:border-bone/50";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-stone">
        {label}
        {required && <span className="ml-1 text-rabbit">*</span>}
      </span>
      {children}
    </label>
  );
}
