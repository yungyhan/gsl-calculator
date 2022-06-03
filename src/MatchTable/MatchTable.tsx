import React, { useEffect, useMemo } from "react";
import Table from "react-bootstrap/Table";
import { Formik } from "formik";
import styled from "styled-components";
import { FlexBox } from "../UI/FlexBox";
import { getFormObject, getMatchups } from "../utils";
import { playerIds } from "../constants";

const matchups = getMatchups(playerIds);
const formValues = getFormObject(matchups);

export function MatchTable(): React.ReactElement {
  console.log(matchups);
  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          {matchups.map((matchup) => {
            return (
              <FlexBox style={{ marginBottom: 32 }}>
                <MapScoreInput>
                  <MatchupContainer>{`${matchup.player1Id} vs ${matchup.player2Id}`}</MatchupContainer>
                  <MatchupContainer
                    style={{ color: "grey" }}
                  >{`${matchup.player2Id} vs ${matchup.player1Id}`}</MatchupContainer>
                </MapScoreInput>
                <MapScoreInput>
                  <FlexBox>{matchup.player1Id}</FlexBox>

                  <input
                    name={`${matchup.id}.${matchup.player1Id}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[matchup.id].player1Id}
                  />
                </MapScoreInput>
                <MapScoreInput>
                  <FlexBox>{matchup.player2Id}</FlexBox>

                  <input
                    name={`${matchup.id}.${matchup.player2Id}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[matchup.id].player2Id}
                  />
                </MapScoreInput>
              </FlexBox>
            );
          })}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

const MapScoreInput = styled(FlexBox)`
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
`;

const MatchupContainer = styled(FlexBox)`
  width: 350px;
`;
