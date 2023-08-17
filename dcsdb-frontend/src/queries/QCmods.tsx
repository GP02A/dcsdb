import React from "react";
import { useQuery, gql } from "@apollo/client";
import ModsList from "../components/ModsList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";

const SEARCH_MODS = gql`
  query MODS($st: String!) {
    mods(
      filters: {
        or: [
          { name: { contains: $st } }
          { vehicles: { name: { contains: $st } } }
        ]
      }
    ) {
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

const QCmods = (props) => {
  const { loading, error, data } = useQuery(SEARCH_MODS, {
    variables: { st: props.searchText },
  });

  if (loading) return <LoadingMsg />;
  // if (loading) return <p>loading...</p>;
  if (error) return <ErrorMsg />;
  // if (error) return <p>Error :(</p>;
  if (data.mods.data.length === 0) {
    // console.log(data.ips);
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

export default QCmods;
