import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { supabaseKey, supabaseUrl } from "../supabase";

export type User = {
  id: number;
  user_id: string;
  avatar: string;
  name: string;
};
export const getCurrentUser = async (
  cookieStore: ReadonlyRequestCookies,
): Promise<User | undefined> => {
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  });

  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error(error);
    return;
  }

  if (!data || !data.session) {
    return;
  }

  const { data: user, error: userError } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", data.session.user.id)
    .single();

  if (userError) {
    console.log("Error getting current user", userError);
    return;
  }
  if (!user) {
    console.log("No current user");
    return;
  }

  return user;
};
