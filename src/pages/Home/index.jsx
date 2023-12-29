import styled from "styled-components";
import home_img from "../../assets/img/home_img.jpg";
import colors from "../../utils/style";

const StyledMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 60vh;
    margin-top: 200px;
    @media only screen and (max-width: 915px){
        font-size: 1.5em;
        flex-direction: column-reverse;
        gap: 0px;
    }
`
const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 440px){
        width: 200px;
        height: 200px;
    }
`
const StyledText1 = styled.p`
    color: ${colors.secondary};
    font-weight: bold;
    text-align: center;
    font-size: 2em;
    @media only screen and (max-width: 915px){
        font-size: 1.5em;
    }
    @media only screen and (max-width: 520px){
        font-size: 1.3em;
    }
`
const StyledText2 = styled.p`
    width: 500px;
    text-align: center;
    font-size: 1.5em;
    @media only screen and (max-width: 915px){
        font-size: 1.1em;
    }
    @media only screen and (max-width: 520px){
        font-size: 1em;
        width: 450px;
    }
    @media only screen and (max-width: 440px){
        width: 350px;
        font-size: 0.9em;
    }
`

function Home(){
    return(
        <StyledMainDiv>
            <div>
                <StyledText1>GEFRE ?</StyledText1>
                <StyledText2>
                    C&apos;est une groupe d&apos;enseignants experimentes
                    dont la motivation est axée sur le succès et l&apos;épanouissement 
                    de leurs élèves. Leur engagement envers l&apos;excellence académique 
                    et le développement personnel de chaque apprenant constitue le 
                    fondement même de la structure
                </StyledText2>
            </div>
            <StyledImg src={home_img} alt="home_img"/>
        </StyledMainDiv>
    )
}

export default Home;