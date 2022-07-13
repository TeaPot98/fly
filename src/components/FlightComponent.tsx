/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from "styled-components";
import { Flight } from "../types";

const FlightComponent = ({ flight }: { flight: Flight }) => {
  return (
    <StyledFlightComponent>{flight.destination}</StyledFlightComponent>
  );
};

export default FlightComponent;

const StyledFlightComponent = styled.li`
  background-color: ${props => props.theme.secondary.lynxWhite};
  border: 2px solid ${props => props.theme.secondary.coldMorning};
  width: 400px;
  height: 100px;
  border-radius: 10px;
  
`;