import React from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { FlexBox } from "../UI/FlexBox";
import { getFormObject, getMatchups } from "../utils";
import { playerIds } from "../constants";
import { matchupResultToScores } from "../utils/matchupResultToScores";
import { whoIsGoingToNextRound } from "../whoIsGoingToNextRound/whoIsGoingToNextRound";

const matchups = getMatchups(playerIds);
const formValues = getFormObject(matchups);

export function MatchTable(): React.ReactElement {
  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values, { setSubmitting }) => {
        console.log(
          whoIsGoingToNextRound(
            matchupResultToScores({ playerIds, matchupResult: values })
          )
        );
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
              <FlexBox style={{ marginBottom: 32 }} key={matchup.id}>
                <FlexBox style={{ flexDirection: "column" }}>
                  <MatchupContainer>{`${matchup.player1Id} vs ${matchup.player2Id}`}</MatchupContainer>
                  <MatchupContainer
                    style={{ color: "grey" }}
                  >{`${matchup.player2Id} vs ${matchup.player1Id}`}</MatchupContainer>
                </FlexBox>
                <MapScoreInput>
                  <FlexBox>{matchup.player1Id}</FlexBox>
                  <input
                    type={"number"}
                    name={`${matchup.id}.${matchup.player1Id}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values[matchup.id].player1Id}
                  />
                </MapScoreInput>
                <MapScoreInput>
                  <FlexBox>{matchup.player2Id}</FlexBox>
                  <input
                    type={"number"}
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
