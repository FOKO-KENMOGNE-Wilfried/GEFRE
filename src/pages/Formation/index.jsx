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
    gap: 100px;
    height: 60vh;
    margin-top: 200px;
`
const StyledText1 = styled.p`
    position: absolute;
    top: 250px;
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 350px;
    gap: 50px;
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
    &:hover{
        
    }
`
const StyledImg = styled.img`
    width: 86px;
    height: 86px;
`
const StyledP = styled.p`
    color: ${colors.four};
    text-align: center;
`

function Formation(){
    return(        <StyledMainDiv>
            <div>
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
            </div>
        </StyledMainDiv>
    )
}

export default Formation;