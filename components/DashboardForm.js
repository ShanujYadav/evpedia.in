"use client";

import { useState, useTransition } from "react";
import { getHmac } from "@/lib/utils";


const defaultForm = {
  title: "",
  body: "",
  image: null,
  category: ""
};

export default function DashboardForm() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  // This stays intentionally simple for demo purposes; move the check server-side for real auth.
  const requiredPassword = "admin123";

  function handleUnlock(event) {
    event.preventDefault();
    if (password === requiredPassword) {
      setAuthenticated(true);
      setMessage("");
      return;
    }
    setMessage("Invalid password.");
  }

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {

    event.preventDefault();
    setMessage("");
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("body", form.body);
        formData.append("category", form.category);

        if (form.image) {
          formData.append("image", form.image);
        }


        const key = "B6BE35C419AD34A177ED6E1BADEFF75FB018FB3615BBF01BBED133CB4C48562D"
        const hmac = "8c030058df6a5f6259c4f50fca0615f988ca758919371d8fea00b05b21f84ead"


        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/admin/add-post`, {
          method: "POST",
          body: formData,
          headers: {
            reqHmac: hmac,
            sercetKey: key
          }
        });

        const result = await response.json();
        
        if (result.code === "000") {
          setForm(defaultForm);
          setMessage(result.message || "Posted !");
        }
        else {
          throw new Error(result.message || "Unable to publish article.");
        }
      } catch (error) {
        setMessage(error.message);
      }
    });
  }

  if (!authenticated) {
    return (
      <form
        onSubmit={handleUnlock}
        className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)]"
      >
        <h2 className="text-2xl font-black tracking-tight text-white">
          Dashboard Access
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          Enter the admin password to publish a new story. Default demo password:
          {/* <span className="ml-1 font-semibold">admin123</span> */}
        </p>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="mt-6 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-0 transition focus:border-[#00b43e]"
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-2xl bg-[#00b43e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#009735]"
        >
          Unlock
        </button>
        {message ? <p className="mt-4 text-sm text-red-500">{message}</p> : null}
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)]"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-slate-200">
            News Title
          </span>
          <input
            required
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[#00b43e]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-200">
            Upload Image
          </span>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                image: e.target.files[0]
              }))
            }
            className="w-full text-white"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-200">
            Category
          </span>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#00b43e]"
          />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-slate-200">
            Body
          </span>
          <textarea
            required
            rows={8}
            name="body"
            value={form.body}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[#00b43e]"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 rounded-2xl bg-[#00b43e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#009735] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Publishing..." : "Publish Article"}
      </button>
      {message ? <p className="mt-4 text-sm text-emerald-400">{message}</p> : null}
    </form>
  );
}
