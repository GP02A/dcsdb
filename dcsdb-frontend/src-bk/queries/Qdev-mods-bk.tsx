import React from "react";
import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";

const DEV_MODS = gql`
  query MODS($id: ID!) {
    mods(filters: { developers: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          name
          developers {
            data {
              id
              attributes {
                name
              }
            }
          }
          vehicles {
            data {
              id
              attributes {
                name
              }
            }
          }
          environments {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Qdev_mods = (pass) => {
  const { loading, error, data } = useQuery(DEV_MODS, {
    variables: { id: pass.match.params.id },
  });

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  // console.log(data.mods.data);
  if (data.mods.data.length === 0) {
    return (
      <p className="ion-margin ion-text-center" color="warning">
        can't find any mods with this name
      </p>
    );
  } else {
    // console.log(data.ips);
    return (
      <React.Fragment>
        <ModsList mods={data.mods.data} />
      </React.Fragment>
    );
  }
};

export default Qdev_mods;
