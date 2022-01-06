import haiti from "../src/haiti.jpeg";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";


const RoadMap = () => {
    return (
        <div className="container" style={{ padding: 50 }}>
            <Card>
                <CardBody>
                    <CardTitle tag="h1">Our Road Map 🧭</CardTitle>
                    <div className="container" style={{ textAlign: "center", padding: 10 }}>
                        <img src={haiti} width="125" />
                    </div>
                    <CardText>
                        <p>Phase 1:</p>
                        <p> 🇭🇹  Mint NFT And Make Donation To Non Profit</p>
                        <p>Phase 2:</p>
                        <p> 🇭🇹  Coming Soon</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default RoadMap;