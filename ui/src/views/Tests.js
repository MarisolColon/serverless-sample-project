import React from "react"
import CRUD from "../components/CRUD/CRUD"
import Test from "../models/Test"
import TestsService from "../services/testsService"

async function fetchTests () {
  const response = await TestsService.getTests()
  return response.data
}

async function onDelete (test) {
  await TestsService.deleteTest(test.id)
}

function onCreate (test) {
  if (!test) throw new Error('Error, no test received on save function')
  return TestsService.createTest(test)
}

function onUpdate (test) {
  if (!test) throw new Error('Error, no test received on save function')
  return TestsService.updateTest(test.id, test)
}

const fields = Test.getFields()
const extraActions = Test.getExtraActions()

export default function Tests () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'test'}
        dataSource={fetchTests}
        onDelete={onDelete}
        onCreate={onCreate}
        onUpdate={onUpdate}
        extraActions={extraActions}
      />
    </main>
  );
}