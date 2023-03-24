import { Link } from "react-router-dom";
import { ArrowSquareIn, GithubLogo, Buildings, Users } from "phosphor-react";

import { useProfile } from "../../context/ProfileContext";

import { ProfileContainer, ProfileContent, Info } from "./styles";
import { LoadingSpinner } from "../LoadingSpinner";

export function Profile() {
  const { profile, loadingProfile } = useProfile();

  return (
    <ProfileContainer>
      {loadingProfile ? (
        <LoadingSpinner />
      ) : (
        <>
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
        </>
      )}
    </ProfileContainer>
  );
}
