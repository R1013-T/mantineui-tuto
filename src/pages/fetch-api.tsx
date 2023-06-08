import BackHomeButton from "@/components/BackHomeButton";
import FetchTodos from "@/components/FetchTodos";
import { Layout } from "@/components/Layout";
import { Center, Grid } from "@mantine/core";

const FetchData = () => {
  return (
    <Layout title="Fetch Data" >
      <Grid>
        <Grid.Col span={6} >
          <FetchTodos />
        </Grid.Col>
        <Grid.Col span={6} >
          <FetchTodos />
        </Grid.Col>
      </Grid>
      <Center>
        <BackHomeButton />
      </Center>
    </Layout>
  );
}

export default FetchData;