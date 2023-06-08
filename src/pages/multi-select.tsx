import BackHomeButton from '@/components/BackHomeButton'
import { Layout } from '@/components/Layout'
import {
  Center,
  Container,
  MultiSelect,
  Radio,
  RadioGroup,
  Text,
  TransferList,
  TransferListData,
} from '@mantine/core'
import { useState } from 'react'

const MultiSelectDemo = () => {
  const initialValues: TransferListData = [
    [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte' },
    ],
    [],
  ]

  const [radioValue, setRadioValue] = useState('react')
  const [selectValue, setSelectValue] = useState<string[]>([])
  const [transferValue, setTransferValue] =
    useState<TransferListData>(initialValues)

  console.log(radioValue)
  console.log(selectValue)

  return (
    <Layout title="MultiSelect">
      <Container>
        <Text>Frontend library</Text>
        <Center>
          <RadioGroup
            my="lg"
            value={radioValue}
            onChange={setRadioValue}
            required
          >
            <Radio value="react" label="React" />
            <Radio value="vue" label="Vue" />
            <Radio value="angular" label="Angular" />
            <Radio value="svelte" label="Svelte" />
          </RadioGroup>
        </Center>
        <MultiSelect
          my="lg"
          value={selectValue}
          onChange={setSelectValue}
          data={['React', 'Vue', 'Angular', 'Svelte']}
          placeholder="Select items"
          clearable
        />
        <TransferList
          my="lg"
          value={transferValue}
          onChange={setTransferValue}
          searchPlaceholder="Search ..."
          nothingFound="Nothing found"
          titles={['Available', 'Selected']}
          breakpoint="sm"
        />
      </Container>
      <Center>
        <BackHomeButton />
      </Center>
    </Layout>
  )
}

export default MultiSelectDemo
