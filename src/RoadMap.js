import haiti from "../src/haiti.jpeg";
import { CardBody, Card, CardTitle, CardText, Container, CardImg } from "reactstrap";


const RoadMap = () => {
    return (
        <Container style={{ padding: 50, textAlign: "center" }} id="map">
            <Card>
                <CardBody>
                    <CardTitle tag="h1">Our Road Map 🧭</CardTitle>
                    <Container style={{ textAlign: "center", padding: 10 }}>
                        <CardImg src={haiti} width="500" />
                    </Container>
                    <CardText>
                        <p>Phase 1:</p>
                        <p> 🇭🇹  Mint NFT And Make Donation To Non Profits</p>
                        <p>Phase 2:</p>
                        <p> 🇭🇹  Coming Soon</p>
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    )
}

export default RoadMap;