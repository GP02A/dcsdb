import React from "react";
import { useQuery, gql } from "@apollo/client";
import VehiclesList from "../components/VehiclesList";
import LoadingMsg from "../components/LoadingMsg";
import ErrorMsg from "../components/ErrorMsg";

const SEARCH_VEHICLES = gql`
  query VEHICLES {
    vehicles (pagination: { limit: 20 }) {
      data {
        id
        attributes {
          name
          alias
          cover {
            data {
              attributes {
                url
              }
            }
          }
          national_origin {
            data {
              id
              attributes {
                name
                displayname
              }
            }
          }
          manufacturers {
            data {
              attributes {
                name
              }
            }
          }
          vehicle_domains {
            data {
              id
              attributes {
                name
              }
            }
          }
          mods {
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

const QAvehicles = (props) => {
  const { loading, error, data } = useQuery(SEARCH_VEHICLES, {
    variables: { st: props.searchText },
  });
  if (loading) return <LoadingMsg />;
  if (error) return <ErrorMsg />;
  if (data.vehicles.data.length === 0) {
    return (
      <p className="ion-margin ion-text-center" color="warning">
        can't find any vehicles with this name
      </p>
    );
  } else {
    // console.log(data.vehicles.data);
    return (
      <React.Fragment>
        <VehiclesList vehicles={data.vehicles.data} />
      </React.Fragment>
    );
  }
};

export default QAvehicles;
