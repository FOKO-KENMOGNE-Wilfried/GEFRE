import styled from "styled-components";
import home_img from "../../assets/img/home_img.jpeg";
import colors from "../../utils/style";
import { NavLink } from "react-router-dom";
import "./style.css";

const StyledMainDiv = styled.div`
    margin-top: 200px;
    height: 500px;
    margin-bottom: 70px;
    margin-left: -10px;
    margin-right: -8px;
    padding-bottom: 100px;
    @media only screen and (max-width: 1783px){
        margin-top: 171px;
    }
    @media only screen and (max-width: 1438px){
        margin-top: 170px;
    }
    @media only screen and (max-width: 1120px){
        margin-top: 130px;
    }
    @media only screen and (max-width: 704px){
        margin-top: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 390px;
    }
    @media only screen and (max-width: 620px){
        margin-right: -28px;
    }
    @media only screen and (max-width: 599px){
        margin-top: 379px;
        height: 410px;
    }
    @media only screen and (max-width: 569px){
        height: 410px;
    }
    @media only screen and (max-width: 537px){
        height: 450px;
    }
    @media only screen and (max-width: 435px){
        height: 460px;
    }
    @media only screen and (max-width: 397px){
        height: 480px;
    }
    @media only screen and (max-width: 361px){
        height: 500px;
    }
    @media only screen and (max-width: 339px){
        height: 520px;
    }
`
const StyledSubMainDiv = styled.div`
    background-image: url(${home_img});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100% 170% ;
    background-position-y: 93%;
    height: 100%;
    padding-bottom: 42px;
    padding-top: 42px;
    @media only screen and (max-width: 1438px){
        background-size: 100% 150%;
    }
    @media only screen and (max-width: 1120px){
        background-size: 100% 130%;
    }
    @media only screen and (max-width: 1022px){
        background-size: 100% 110%;
    }
`
const StyledPresentationDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 35%;
    height: 100%;
    margin-left: 20px;
    text-align: center;
    padding-bottom: 20p;
    @media only screen and (max-width: 704px){
        width: 30%;
    }
    @media only screen and (max-width: 499px){
        margin-top: 30px;
        width: 40%;
    }
`
const StyledTitle = styled.p`
    color: ${colors.secondary};
    font-size: 3em;
    font-weight: bold;
    @media only screen and (max-width: 1783px){
        font-size: 2.5em;
    }
    @media only screen and (max-width: 1438px){
        margin-top: 10px;
    }

`
const StyledText = styled.p`
    color: ${colors.four};
    font-size: 2em;
    width: 70%;
    margin: auto
`
const StyledDivText = styled.div`
    background-color: ${colors.secondary};
    padding: 5px 0px 5px 0px;
    color: black;
    font-size: 1.5em;
    padding-left: 15px;
    font-weight: bold;
    text-align: center;
`
const StyledDivStep = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.6fr;
    background-color: ${colors.third};
    @media only screen and (max-width: 1438px){
        font-size: 0.8em;
    }
    @media only screen and (max-width: 704px){
        grid-template-columns: 1fr;
    }
`
const StyledStep = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 100px;
    padding-right: 50px;
    font-size: 1.2em;
    @media only screen and (max-width: 1120px){
        font-size: 1em;
    }
    @media only screen and (max-width: 704px){
        font-size: 1.5em;
    }
`
const StyledStep2 = styled(NavLink)`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    height: 100px;
    padding-right: 50px;
    font-size: 1.2em;
    text-decoration: none;
    color: black;
    background-color: ${colors.secondary};
    @media only screen and (max-width: 1120px){
        font-size: 1em;
    }
    @media only screen and (max-width: 704px){
        font-size: 1.5em;
    }
`
const StyledStep3 = styled(NavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10px;  
    padding-top: 40px;  
    padding-bottom: 20px;  
    padding-right: 20px;
    font-size: 1em;
    background-color: black;
    padding-left: 50px;
    color: ${colors.four};
    text-decoration: none;
    position: relative;  
    top: 115%;  
    right: 40vw;  
    border-radius: 20px;  
    transition:  
    color 0.3s,  
    padding-top 0.3s,  
    padding-bottom 0.3s,  
    border-radius 0.3s,  
    margin-bottom 0.3s,
    margin-top 0.3s,
    background-color 0.3s;  
    width: 90px;  

    &:hover{  
        margin-bottom: 15px;
        font-weight: bold;  
        border-radius: 10px;  
        margin-top: 10px;  
        padding-top: 30px;  
        padding-bottom: 10px;  
        color: black;  
        background-color: ${colors.third};  
    }  
    @media only screen and (max-width: 704px){
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        padding-right: 20px;
        background-color: black;
        padding-left: 50px;
        color: ${colors.four};
        text-decoration: none;
        transition: 
        color 0.5s,
        background-color 0.5s;
        padding-top: 0px;
        padding-bottom: 0px;
        position: relative;
        top: 0;
        right: 0;
        border-radius: 0px;
        width: 100%;
        &:hover{
            background-color: ${colors.four};
            color: black;
            //opacity: 0.5;
        }
        @media only screen and (max-width: 704px){
            font-size: 1.5em;
        }

    }
`

const StyledNumber = styled.div`
    border-right: 1px solid black;
    font-size: 2.5em;
    height: 100%;
    padding-left: 10px;
    padding-right: 4px;
`
const StyledP = styled.p`
    padding-top: 60%;
    margin-top: 10px;
`
const StyledStepP = styled.p`
    margin-top: 0px;
    @media only screen and (min-width: 1439px){
        margin-top: 30px;
    }
`
const StyledStepP2 = styled.p`
    margin-top: 0px;
    margin-left: -20px;
    @media only screen and (max-width: 1438px){
        font-size: 1em;
        padding-left: 10px;
    }
    @media only screen and (max-width: 740px){
        margin-left: 0px;
        padding-top: -50px;
        padding-left: 0px;
    }
    @media only screen and (max-width: 704px){
        margin: auto;
    }
`
const StyledPresentation = styled.div`
    font-size: 0.85em;
    @media only screen and (max-width: 1438px){
        font-size: 0.78em;
    }
    @media only screen and (max-width: 1120px){
        font-size: 0.75em;
    }
    @media only screen and (max-width: 1022px){
        font-size: 0.6em;
    }
    @media only screen and (max-width: 704px){
        font-size: 0.4em;
        margin-bottom: 10px;
    }
`

function Home(){
    return(
        <StyledMainDiv>
            <StyledSubMainDiv>
                <StyledPresentationDiv>
                    <StyledPresentation>
                        <StyledTitle>
                            GEFRE ?
                        </StyledTitle>
                        <StyledText>
                            C’est une groupe d’enseignants experimentes
                            dont la motivation est axée sur le succès et l’épanouissement
                            de leurs élèves. Leur engagements envers l’excellence académique
                            et le développement personnel de chaque apprenant constituent le
                            fondement même de la structure
                        </StyledText>
                    </StyledPresentation>
                </StyledPresentationDiv>
            </StyledSubMainDiv>
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
                        <StyledStep2 to={"/formations"} className={"former"}>
                            <StyledNumber><StyledP>4</StyledP></StyledNumber>
                            <StyledStepP>Faites vous former</StyledStepP>
                        </StyledStep2>
                        <StyledStep3 to={"/contacter"}>
                            <StyledStepP2>QUESTION ?</StyledStepP2>
                        </StyledStep3>
                    </StyledDivStep>
                </div>
        </StyledMainDiv>
    )
}

export default Home;