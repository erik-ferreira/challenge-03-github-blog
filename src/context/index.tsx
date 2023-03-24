import { ReactNode } from "react";

import { PostsProvider } from "./PostsContext";
import { ProfileProvider } from "./ProfileContext";

interface AppContextProps {
  children: ReactNode;
}

export function AppContext({ children }: AppContextProps) {
  return (
    <ProfileProvider>
      <PostsProvider>{children}</PostsProvider>
    </ProfileProvider>
  );
}
