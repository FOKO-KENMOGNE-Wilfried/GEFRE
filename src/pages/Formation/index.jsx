import styled from "styled-components";
import colors from "../../utils/style";
import math from "../../assets/img/mathematique.webp";
import physique from "../../assets/img/physique.jpeg";
import chimie from "../../assets/img/chimie.jpeg";
import informatique from "../../assets/img/informatique.jpeg";
import anglais from "../../assets/img/anglais.jpeg";
import francais from "../../assets/img/francais.jpg";
import "./style.css"

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`
const StyledDivTitle = styled.div`
    position: relative;
    top: 0;
    padding-left: 16.5px;
    height: 120px;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 1783px){
        top: -30px;
    }
    @media only screen and (max-width: 1438px){
        top: -30px;
    }
    @media only screen and (max-width: 1120px){
        top: -70px;
    }
    @media only screen and (max-width: 947px){
        top: -70px;
    }
    @media only screen and (max-width: 841px){
        top: -70px;
    }
    @media only screen and (max-width: 668px){
        top: -70px;
    }
    @media only screen and (max-width: 619px){
        top: -70px;
        width: 103%;
    }
    @media only screen and (max-width: 599px){
        top: -100px;
        width: 108%;
    }
    @media only screen and (max-width: 460px){
        top: -110px;
    }
`
const StyledTitle = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    color: ${colors.secondary};
    padding-top: 1px;
    padding-bottom: 1px;
    margin-top: 8px;
    font-weight: bold;
    font-size: 2em;
`
const StyledImg = styled.img`
    width: 40vw;
    height: 90%;
    margin-top: 15px;
    margin-left: 300px;
    border-radius: 0px 20px 20px 0px;
    @media only screen and (max-width: 1578px){
        width: 35vw;
        margin-top: 10px;
    }
    @media only screen and (max-width: 1425px){
        width: 30vw;
        margin-left: 200px;
    }
    @media only screen and (max-width: 1137px){
        width: 30vw;
        margin-left: 100px;
    }
    @media only screen and (max-width: 927px){
        width: 30vw;
        margin-left: 50px;
    }
    @media only screen and (max-width: 600px){
        margin-left: 0px;
    }
    @media only screen and (max-width: 500px){
        width: 50vw;
        height: 80%;
        margin-top: 20px;
    }
`
const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color:${colors.third};
    width: 95vw;
    height: 33vh;
    border-radius: 20px;
    margin-top: 20px;
`
const StyledRange = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    background-color: ${colors.four};
    width: 26vw;
    height: 60px;
    border-radius: 20px;
    text-align: center;
    margin-top: -40px;
    padding-bottom: 5px;
    font-size: 0.6em;
    font-weight: normal;
    @media only screen and (max-width: 1366px){
        width: 30vw;
        height: 40px;
        font-size: 0.5em;
    }
    @media only screen and (max-width: 927px){
        margin-top: -20px;
    }
    @media only screen and (max-width: 600px){
        margin-top: 0px;
    }
    @media only screen and (max-width: 500px){
        font-size: 0.9em;
        padding-top: 5px;
    }
    @media only screen and (max-width: 420px){
        font-size: 0.9em;
    }
`
const StyledSubBox =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    font-weight: bold;
    margin-left: 10%;
    @media only screen and (max-width: 927px){
        font-size: 2em;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.5em;
    }
    @media only screen and (max-width: 500px){
        font-size: 1.3em;
        margin-left: 0px;
    }
    @media only screen and (max-width: 420px){
        font-size: 1em;
    }
`


function Formation(){
    return(
        <StyledMainDiv>
            <StyledDivTitle className="head">
                <StyledTitle>
                    <p>NOS FORMATIONS</p>
                </StyledTitle>
            </StyledDivTitle>
            <div>
                <StyledBox>
                    <StyledSubBox>
                        <p>MATHEMATIQUE</p>
                        <StyledRange>
                            <p>
                                De 6eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={math} alt="mathematique" />
                    </div>
                </StyledBox>
                <StyledBox>
                    <StyledSubBox>
                        <p>PHYSIQUE</p>
                        <StyledRange>
                            <p>
                                De 6eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={physique} alt="physique" />
                    </div>
                </StyledBox>
                <StyledBox>
                    <StyledSubBox>
                        <p>CHIMIE</p>
                        <StyledRange>
                            <p>
                                De 4eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={chimie} alt="chimie" />
                    </div>
                </StyledBox>
                <StyledBox>
                    <StyledSubBox>
                        <p>INFORMATIQUE</p>
                        <StyledRange>
                            <p>
                                De 6eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={informatique} alt="informatique" />
                    </div>
                </StyledBox>
                <StyledBox>
                    <StyledSubBox>
                        <p>ANGLAIS</p>
                        <StyledRange>
                            <p>
                                De 6eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={anglais} alt="anglais" />
                    </div>
                </StyledBox>
                <StyledBox>
                    <StyledSubBox>
                        <p>FRANCAIS</p>
                        <StyledRange>
                            <p>
                                De 6eme en Terminal
                            </p>
                        </StyledRange>
                    </StyledSubBox>
                    <div>
                        <StyledImg src={francais} alt="francais" />
                    </div>
                </StyledBox>
            </div>
        </StyledMainDiv>
    )
}

export default Formation;