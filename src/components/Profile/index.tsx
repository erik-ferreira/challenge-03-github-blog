import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { ArrowSquareIn, GithubLogo, Buildings, Users } from "phosphor-react";

import { ProfileContainer, ProfileContent, Info } from "./styles";

interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string | null;
  followers: number;
  html_url: string;
}

export function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  async function getDataProfile() {
    const response = await api.get<Profile>("/users/erik-ferreira");

    setProfile(response.data);
  }

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <ProfileContainer>
      <img src={profile?.avatar_url} />

      <ProfileContent>
        <div>
          <h1>{profile?.name}</h1>

          <Link to={profile?.html_url || ""} target="_blank">
            GITHUB
            <ArrowSquareIn size={16} />
          </Link>
        </div>

        <p>{profile?.bio}</p>

        <Info>
          <li>
            <GithubLogo size={18} />
            {profile?.login}
          </li>

          {profile?.company && (
            <li>
              <Buildings size={18} />
              {profile?.company}
            </li>
          )}

          <li>
            <Users size={18} />
            {profile?.followers} seguidores
          </li>
        </Info>
      </ProfileContent>
    </ProfileContainer>
  );
}
