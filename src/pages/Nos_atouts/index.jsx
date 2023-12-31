import styled from "styled-components";
import atout from "../../assets/img/atout.jpg";
import colors from "../../utils/style";
import check from "../../assets/icon/check.png"

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding-top: 115px;
    padding-bottom: 300px;
    margin-top: 230px;
    @media only screen and (max-width: 862px){
        margin-top: 130px;
        padding-top: 190px;
    }
    @media only screen and (max-width: 841px){
        padding-top: 240px;
    }
    @media only screen and (max-width: 687px){
        padding-top: 270px;
    }
    @media only screen and (max-width: 563px){
        padding-top: 310px;
        padding-bottom: 250px;
    }
    @media only screen and (max-width: 535px){
        padding-top: 340px;
    }
    @media only screen and (max-width: 515px){
        padding-top: 280px;
        padding-bottom: 350px;
    }
    @media only screen and (max-width: 400px){
        padding-top: 230px;
    }
`
const StyledImg = styled.img`
    width: 350px;
    height: 300px;
    margin-right: 250px;
    @media only screen and (max-width: 1222px){
        width: 250px;
        height: 200px;
    }
    @media only screen and (max-width: 862px){
        width: 150px;
        height: 100px;
    }
    @media only screen and (max-width: 515px){
        width: 200px;
        height: 150px;
    }
`
const StyledText1 = styled.p`
    left: 800px;
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
    @media only screen and (max-width: 1222px){
        font-size: 1.7em;
    }
    @media only screen and (max-width: 862px){
        font-size: 1.2em;
    }
`
const StyledText2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5em;
    margin-top: 150px;
    @media only screen and (max-width: 862px){
        margin-top: 0px;
    }
    @media only screen and (max-width: 515px){
        margin-top: 200px;
    }
`
const StyledText3 = styled.p`
    text-align: left;
    @media only screen and (max-width: 1222px){
        font-size: 1.1em;
    }
    @media only screen and (max-width: 862px){
        font-size: 1em;
        margin-left: 30px;
    }
    @media only screen and (max-width: 400px){
        font-size: 0.8em;
        margin-left: 30px;
    }
`
const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media only screen and (max-width: 1222px){
        font-size: 1.1em;
    }
    @media only screen and (max-width: 862px){
        font-size: 1em;
        margin-left: 30px;
    }
    @media only screen and (max-width: 400px){
        font-size: 0.8em;
    }
    @media only screen and (max-width: 400px){
        gap: 10px
    }
`
const StyledCheck = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 20px;
    @media only screen and (max-width: 1222px){
        width: 30px;
        height: 30px;
        margin-top: 25px;
    }
    @media only screen and (max-width: 862px){
        width: 25px;
        height: 25px;
        margin-top: 25px;
    }
    @media only screen and (max-width: 400px){
        width: 20px;
        height: 20px;
        margin-top: 20px;
    }
`
const StyledBox1 =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    @media only screen and (max-width: 515px){
        flex-direction: column-reverse;
    }
`

function Atouts(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText2>
                    <StyledText1>NOS ATOUTS</StyledText1>
                    <StyledBox1>
                        <div>
                            <StyledText3>Nous disposons:</StyledText3>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    D&apos;un cadre securise, propre, alimente en energie et eau;
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    Des salles spacieuses ou sont dispenses les cours.
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    De personnes qualifiees pour faire un suivi pedagogique des eleves durant l'annee scolaire en groupe et ou a domicile
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    De personnes qualifiees pour conseiller et orienter les apprenants
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    D'un systeme d'enseignement a distance
                                </p>
                            </StyledLi>
                            <StyledLi>
                                <StyledCheck src={check} alt="check" />
                                <p>
                                    Des competences necessaires permettants de preparer les apprenants aux cncours dans les grandes ecoles
                                </p>
                            </StyledLi>
                        </div>
                    </StyledBox1>
                </StyledText2>
            </div>
        </StyledMainDiv>
    )
}

export default Atouts;