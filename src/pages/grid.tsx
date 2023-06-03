import BackHomeButton from '@/components/BackHomeButton'
import { Layout } from '@/components/Layout'
import { Grid, Center } from '@mantine/core'

const GridDemo = () => {
  return (
    <Layout title="grid">
      <Grid className="my-4 bg-gray-400">
        <Grid.Col
          className="bg-indigo-400 text-center font-bold text-white"
          span={4} // 4/12
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-teal-400 text-center font-bold text-white"
          span={4}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-orange-400 text-center font-bold text-white"
          span={4}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400">
        <Grid.Col
          className="bg-indigo-400 text-center font-bold text-white"
          span={6}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-teal-400 text-center font-bold text-white"
          span={6}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-orange-400 text-center font-bold text-white"
          span={6}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400" grow>
        <Grid.Col
          className="bg-indigo-400 text-center font-bold text-white"
          span={6}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-teal-400 text-center font-bold text-white"
          span={6}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-orange-400 text-center font-bold text-white"
          span={6}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400">
        <Grid.Col
          className="bg-indigo-400 text-center font-bold text-white"
          span={3}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-teal-400 text-center font-bold text-white"
          span={3}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-orange-400 text-center font-bold text-white"
          span={3}
          offset={3}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400" justify="flex-end">
        <Grid.Col
          className="h-12 bg-indigo-400 text-center font-bold text-white"
          span={3}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="h-24 bg-teal-400 text-center font-bold text-white"
          span={3}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="h-36 bg-orange-400 text-center font-bold text-white"
          span={3}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400" align="center">
        <Grid.Col
          className="h-12 bg-indigo-400 text-center font-bold text-white"
          span={3}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="h-24 bg-teal-400 text-center font-bold text-white"
          span={3}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="h-36 bg-orange-400 text-center font-bold text-white"
          span={3}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid className="my-4 bg-gray-400">
        <Grid.Col
          className="bg-indigo-400 text-center font-bold text-white"
          sm={6}
          lg={3}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-teal-400 text-center font-bold text-white"
          sm={6}
          lg={3}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="bg-orange-400 text-center font-bold text-white"
          sm={6}
          lg={3}
        >
          3
        </Grid.Col>
        <Grid.Col
          className="bg-pink-400 text-center font-bold text-white"
          sm={6}
          lg={3}
        >
          4
        </Grid.Col>
      </Grid>
      <Center>
        <BackHomeButton />
      </Center>
    </Layout>
  )
}

export default GridDemo
