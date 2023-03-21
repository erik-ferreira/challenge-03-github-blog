import { ArrowSquareIn, GithubLogo, Buildings, Users } from "phosphor-react";

import { ProfileContainer, ProfileContent, Info } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/erik-ferreira.png" />

      <ProfileContent>
        <div>
          <h1>Erik Ferreira</h1>

          <a href="#">
            GITHUB
            <ArrowSquareIn size={16} />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <Info>
          <li>
            <GithubLogo size={18} />
            cameronwll
          </li>

          <li>
            <Buildings size={18} />
            Rocketseat
          </li>

          <li>
            <Users size={18} />
            32 seguidores
          </li>
        </Info>
      </ProfileContent>
    </ProfileContainer>
  );
}
