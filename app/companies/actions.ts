"use server";
import { redirect } from "next/navigation";

export const updateSearch = (formData: FormData) => {
  const params = new URLSearchParams();
  const query = formData.get("query");

  if (query) {
    params.append("search", query.toString());
    redirect(`/companies?${params}`);
  }

  redirect(`/companies`);
};
