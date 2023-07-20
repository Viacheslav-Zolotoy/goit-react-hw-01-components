import { UserCard } from "./userCard/userCard";
import { Stats } from "./stats/stats";
import user from "./user.json";
import { Container } from "./profile.styled";
export const Profile = () => {
    return <Container>
        <UserCard props={user} />
        <Stats props={user}/>
    </Container>
}