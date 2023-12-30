import styled from "styled-components";
import home_img from "../../assets/img/home_img.jpg";
import colors from "../../utils/style";
import "./style.css"

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    height: 50vh;
    width: 101%;
    margin-left: -10px;
`
const StyledSubMainDiv = styled.div`
    padding-bottom: 85px;
`
const StyledPresentationDiv = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: 35%;
    height: 100%;
    margin-left: 20px;
    text-align: center;
    padding-bottom: 20px;
`
const StyledTitle = styled.p`
    padding-top: 20px;
    color: ${colors.secondary};
    font-size: 2em;
    font-weight: bold;

`
const StyledText = styled.p`
    color: black;
    font-size: 1.8em;
    width: 70%;
    margin: auto
`
const StyledDivText = styled.div`
    background-color: ${colors.secondary};
    padding: 5px 0px 5px 0px;
    color: ${colors.four};
    font-size: 1.5em;
    padding-left: 15px;
`
const StyledDivStep = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.6fr;
    background-color: ${colors.third};
`
const StyledStep = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 100px;
    padding-right: 50px;
    font-size: 1.2em;
`
const StyledStep2 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 100px;
    padding-right: 50px;
    font-size: 1.2em;
    background-color: ${colors.secondary};
`
const StyledStep3 = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 100px;
    padding-right: 50px;
    font-size: 1.2em;
    background-color: black;
    padding-left: 50px;
    color: ${colors.four};
`

const StyledNumber = styled.div`
    border-right: 1px solid black;
    font-size: 2.5em;
    height: 100%;
    padding-left: 10px;
    padding-right: 4px;
`
const StyledP = styled.p`
    margin-top: 10px;
`
const StyledStepP = styled.p`
    margin-top: 0px;
`

function Home(){
    return(
        <StyledMainDiv>
            <StyledSubMainDiv className="subMainDiv">
                <StyledPresentationDiv>
                    <div>
                        <StyledTitle>
                            GEFRE ?
                        </StyledTitle>
                        <StyledText>
                            C’est une groupe d’enseignants experimentes
                            dont la motivation est axée sur le succès et l’épanouissement
                            de leurs élèves. Leur engagement envers l’excellence académique
                            et le développement personnel de chaque apprenant constitue le
                            fondement même de la structure
                        </StyledText>
                    </div>
                </StyledPresentationDiv>
            </StyledSubMainDiv>
            <div>
                <div>
                    <StyledDivText>
                        <p>LA REALISATION DE VOS REVES COMMENCE ICI</p>
                    </StyledDivText>
                    <StyledDivStep>
                        <StyledStep>
                            <StyledNumber><StyledP>1</StyledP></StyledNumber>
                            <StyledStepP>Contactez-nous</StyledStepP>
                        </StyledStep>
                        <StyledStep2>
                            <StyledNumber><StyledP>2</StyledP></StyledNumber>
                            <StyledStepP>Rencontrez un de nos encadreur</StyledStepP>
                        </StyledStep2>
                        <StyledStep>
                            <StyledNumber><StyledP>3</StyledP></StyledNumber>
                            <StyledStepP>Choisissez les formations qui vous interessent</StyledStepP>
                        </StyledStep>
                        <StyledStep2>
                            <StyledNumber><StyledP>4</StyledP></StyledNumber>
                            <StyledStepP>Faites vous former</StyledStepP>
                        </StyledStep2>
                        <StyledStep3>
                            <StyledStepP>QUESTION ?</StyledStepP>
                        </StyledStep3>
                    </StyledDivStep>
                </div>
            </div>
        </StyledMainDiv>
    )
}

export default Home;