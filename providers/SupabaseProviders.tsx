"use client";
import {
  createClientComponentClient,
  createPagesBrowserClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "../database.types";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
interface SupabaseProvidersProps {
  children: React.ReactNode;
}
const SupabaseProviders: React.FC<SupabaseProvidersProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};
export default SupabaseProviders;
