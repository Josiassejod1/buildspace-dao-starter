import touissant from "../src/touissant.png";
import { CardBody, Card, CardTitle, CardText, Container } from "reactstrap";


const Mission = () => {
    return (
        <Container style={{padding: 10}}>
            <Container style={{textAlign: "center", padding: 10}}>
                <img src={touissant} width="125" />
            </Container>
            <Card>
                <CardBody>
                    <CardTitle tag="h1">Our Mission</CardTitle>
                    <CardText>
                        Haiti has been through a lot of transition over the last decades through factors that are both in our control and not under our control. There have been a slew of devastating Earthquakes, Political Unrest, and Issues for quite some time now.
                        In times of need, finding the support and resources to deploy to the country has been difficult to track and maintain because of corruption.
                        Therefore, this DAO is being created as a proof of concept to see how we can bring crypto to the Haitian people in the time of need.
                        There are millions of Haitians apart of the Diaspora all over the world who would like to help their mother country, but don’t have the resources or the time to figure out where they should help.
                        <br />
                        <br />
                        Therefore, we present the HaitiDAO. A stake in the future of Haiti’s well being, where we pool our resources to help the coutry in its time of need.
                        The DAO, we would give voting rights to users to make decisions on where the funds can be dispersed. This will help with transparency and intentionality in how we invest in our country.
                        They can be split between different sectors such as Technology, Education, Infrastructure, and Medicine.
                        We will present a list of organizations in each sector to check out and allow members to cast votes on the funding amount.
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Mission;