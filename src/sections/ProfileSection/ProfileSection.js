import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../utils/portfolio";
import ContactSection from "../ContactSection/ContactSection";
import Loader from "../../components/Loader/Loader";

const renderLoader = () => <Loader />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function ProfileSection() {
  const [prof, setrepo] = useState([]);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setrepo(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (GitHub profile fetch failed. Reverting to default contact section)`
            );
            setrepo("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <ContactSection />;
  }
}
