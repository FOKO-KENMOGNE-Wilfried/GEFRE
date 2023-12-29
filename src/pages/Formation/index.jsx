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
    margin-top: 200px;
`
const StyledText1 = styled.div`
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2.5em;
    margin-top: 150px;
    @media only screen and (max-width: 597px){
        font-size: 1.5em;
        margin-top: -80px;
    }
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 60px;
    @media only screen and (max-width: 1400px){
        padding: 25px;
    }
    @media only screen and (max-width: 1186px){
        flex-direction: column;
        gap: 20px;
    }
`
const StyledSubBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.third};
    padding: 30px;
    border-radius: 20px;
    gap: 60px;
    transformation: translateY(-50%);
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: translateY(-50px);
        box-shadow: 2px 2px 2px 2px #878787;
    }
    @media only screen and (max-width: 1400px){
        padding: 25px;
        &:hover{
            transform: translateY(0px);
        }
    }
`
const StyledImg = styled.img`
    width: 40px;
    height: 50px;
`
const StyledImg2 = styled.img`
    width: 80px;
    height: 80px;
`
const StyledImg3 = styled.img`
    width: 80px;
    height: 80px;
`
const StyledP = styled.div`
    color: ${colors.four};
    text-align: center;
    height: 150px;
    width: 250px;
`
const StyledMainBox = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
`

function Formation(){
    return(
        <StyledMainDiv>
            <StyledMainBox>
                <StyledText1>
                    NOS FORMATIONS
                </StyledText1>
                <StyledBox>
                    <StyledSubBox>
                        <StyledImg src={suivi} alt="phone" />
                        <StyledP>
                            SUIVI PEDAGOGIQUE DES ELEVES DURANT L’ANNEE EN GROUPE ET A DOMICILE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg2 src={orintation} alt="phone" />
                        <StyledP>
                            CONSEIL ET ORIENTATIONS SCOLAIRE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg3 src={orintation2} alt="phone" />
                        <StyledP>
                            CONSEIL ET ORIENTATION POST BACC
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg3 src={e_learning} alt="phone" />
                        <StyledP>
                            ENSEIGNEMENT A DISTANCE
                        </StyledP>
                    </StyledSubBox>
                    <StyledSubBox>
                        <StyledImg3 src={exam} alt="phone" />
                        <StyledP>
                            PREPARATION AUX EXAMENS ET CONSOURS DES GRANDES ECOLES
                        </StyledP>
                    </StyledSubBox>
                </StyledBox>
            </StyledMainBox>
        </StyledMainDiv>
    )
}

export default Formation;