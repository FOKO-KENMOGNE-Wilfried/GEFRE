import styled from "styled-components";
import colors from "../../utils/style";
import suivi from "../../assets/icon/suivi.png";
import orintation from "../../assets/icon/orientation.png";
import orintation2 from "../../assets/icon/orientation2.png";
import e_learning from "../../assets/icon/e-learning.png";
import exam from "../../assets/icon/exam.png";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60vh;
    margin-top: 300px;
`
const StyledText1 = styled.p`
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2.5em;
    @media only screen and (max-width: 1265px){
        font-size: 2em;
    }
    @media only screen and (max-width: 1265px){
        font-size: 1.5em;
    }
    @media only screen and (max-width: 385px){
        font-size: 1em;
    }
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
    @media only screen and (max-width: 385px){
        flex-direction: column;
        gap: 10px;
        align-items: center;
        margin-top: 0px;
    }
`
const StyledSubBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.third};
    padding: 30px;
    gap: 30px;
    border-radius: 20px;
    height: 300px;
    width: 150px;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: translateY(-50px);
        box-shadow: 2px 2px 2px 2px #878787;
    }
    @media only screen and (max-width: 1265px){
        width: 100px;
        height: 200px;
        &:hover{
            transform: translateY(0);
        }
    }
    @media only screen and (max-width: 1265px){
        height: 150px;
        gap: 10px;
    }
    @media only screen and (max-width: 596px){
        height: 120px;
    }
    @media only screen and (max-width: 385px){
        height: 80px;
    }
`
const StyledImg = styled.img`
    width: 86px;
    height: 86px;
    @media only screen and (max-width: 1265px){
        width: 56px;
        height: 56px;
    }
    @media only screen and (max-width: 385px){
        width: 26px;
        height: 26px;
    }
`
const StyledP = styled.p`
    color: ${colors.four};
    text-align: center;
    @media only screen and (max-width: 1265px){
        font-size: 0.8em;   
    }
    @media only screen and (max-width: 1265px){
        font-size: 0.6em;
    }
    @media only screen and (max-width: 385px){
        font-size: 0.4em;
    }
`
const StyledMianBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function Formation(){
    return(        
        <StyledMainDiv>
            <StyledMianBox>
                <StyledText1>QUE FAISONS NOUS ?</StyledText1>
                <StyledBox>
                    <StyledSubBox>
                        <StyledImg src={suivi} alt="suivi" />
                        <StyledP>
                            SUIVI PEDAGOGIQUE DES ELEVES DURANT L&apos;ANNEE EN GROUPE ET/OU A DOMICILE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg src={orintation} alt="phone" />
                        <StyledP>
                            CONSEILS ET ORIENTATIONS SCOLAIRE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg src={orintation2} alt="phone" />
                        <StyledP>
                            CONSEILS ET ORIENTATIONS POST BACC
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg src={e_learning} alt="phone" />
                        <StyledP>
                            ENSEIGNEMENTS A DISTANCE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg src={exam} alt="phone" />
                        <StyledP>
                            PREPARATION AUX EXAMENS ET CONCOURS DES GRANDES ECOLES
                        </StyledP>
                    </StyledSubBox>
                </StyledBox>
            </StyledMianBox>
        </StyledMainDiv>
    )
}

export default Formation;