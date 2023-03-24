import {
  ReactNode,
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string | null;
  followers: number;
  html_url: string;
}

interface ProfileContextType {
  loadingProfile: boolean;
  profile: ProfileProps | null;
}

export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileProviderProps {
  children: ReactNode;
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [profile, setProfile] = useState<ProfileProps | null>(null);

  async function getDataProfile() {
    try {
      setLoadingProfile(true);
      const response = await api.get<ProfileProps>("/users/erik-ferreira");

      if (response.status === 200) {
        setProfile(response.data);
      }
    } catch (err) {
      toast.error("Não foi possível pegar os dados de perfil.");
    } finally {
      setLoadingProfile(false);
    }
  }

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        loadingProfile,
        profile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  return context;
}
