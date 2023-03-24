import { ReactNode } from "react";

import { ProfileProvider } from "./ProfileContext";

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return <ProfileProvider>{children}</ProfileProvider>;
}
