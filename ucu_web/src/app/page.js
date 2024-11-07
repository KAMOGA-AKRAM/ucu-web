import Title from "../components/Title";
import Content from "../components/content";
import Button from '@mui/material/Button';
function Home() {
  return (
    <div>
      <Title heading="MAKERERE BLOG" />
      <Content details="This is a very nice blog from MAK" />

      <br />

      <Title heading="UGANDA MARTYRS BLOG" />
      <Content details="This is a very nice blog from UMU" />
      <br />

      <Title heading="NDEJJE BLOG" />
      <Content details="This is a very nice blog from NDEJJE" />
      <Button variant="contained">Contained</Button>

  </div>
);
}

export default Home;